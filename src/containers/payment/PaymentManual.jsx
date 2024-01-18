import { useTranslation } from "react-i18next";
import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { usePaymentPageStyles } from "./_styles";
import FidyahLayout from "@fidyah/layouts";
import { toRupiah } from "@fidyah/utils/helpers";
import { useTotalPayable } from "@fidyah/hooks/useTotalPayable";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import MakePayment from "@fidyah/components/MakePayment";
import {
  resetStoreData,
  setLoadingCreatePayment,
} from "@fidyah/context/actions";
import { useStore } from "@fidyah/hooks/useStore";
import { requests } from "@fidyah/utils/requests";
import { enqueueSnackbar } from "notistack";
import QRISDIalog from "@fidyah/components/QRISDialog/QRISDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentManual = () => {
  const { t } = useTranslation();
  const { dispatch, state } = useStore();

  const navigate = useNavigate();

  const [phoneInfo, setPhoneInfo] = useState(null);
  const [isOpenDialogQRIS, setIsOpenDialogQRIS] = useState(false);

  const classes = usePaymentPageStyles(); 
  const totalPayable = useTotalPayable();

  const formSchema = yup.object().shape({
    name: yup.string().min(3).max(50).required(t("inputError.nameRequired")),
    email: yup
      .string()
      .email(t("inputError.emailNotValid"))
      .required(t("inputError.emailRequired"))
  });

  const {
    control,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const handleMakePayment = (values) => {
    const phone_num = `0${phoneInfo.nationalNumber}`;

    if (phone_num.length < 8) {
      return setError('phone_num', { message: t('inputError.noTelpMin') });
    } 
    
    if (phone_num.length > 13) {
      return setError('phone_num', { message: t('inputError.noTelpMax') });
    }
    
    clearErrors('phone_num');

    dispatch(setLoadingCreatePayment(true));

    requests
      .post("/api/palugada/fidyah/tambah-user", {
        ...values,
        phone_num
      })
      .then(() => {
        enqueueSnackbar("Pendaftaran berhasil, silakan bayar menggunakan QRIS !", {
          variant: "success",
          autoHideDuration: 10000,
          hideIconVariant: true 
        });

        setIsOpenDialogQRIS(true);
      })
      .catch((err) => {
        enqueueSnackbar(err.response.data.message, {
          variant: "error",
        });
      })
      .finally(() => dispatch(setLoadingCreatePayment(false)));
  };

  const handleCloseDialogQRIS = () => {
    dispatch(resetStoreData());
    setIsOpenDialogQRIS(false);
    navigate("/");
  };

  return (
    <FidyahLayout
      withBackHeader
      title={t("general.makepayment")}
      bottomNavigation={
        <MakePayment
          title="button.buy"
          isLoadingButton={state?.loading?.createPayment}
          onMakePayment={handleSubmit(handleMakePayment)}
        />
      }>
      <Stack mb="2rem" alignItems="center">
        <Box className={classes.hero}>
          <Stack spacing={1} mb=".5rem">
            <Typography
              fontWeight={700}
              textTransform="uppercase"
              textAlign="center"
              variant="body1">
              {t("payment.title")}
            </Typography>
            <Typography fontWeight={500} textAlign="center" variant="caption">
              {t("general.totalpayablefidyah")}
            </Typography>
          </Stack>

          <Typography
            fontWeight={700}
            color="primary"
            textAlign="center"
            variant="h4">
            {toRupiah(totalPayable)}
          </Typography>

          <Divider sx={{ marginTop: ".75rem", width: "50%" }} />
        </Box>

        <Stack spacing={3} width="100%">
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                onChange={onChange}
                error={errors?.name}
                label={t("label.name")}
                helperText={errors?.name?.message}
                inputProps={{
                  style: {
                    color: "#333",
                    fontSize: ".75rem",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: ".75rem",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontSize: ".65rem",
                    fontFamily: `'Poppins', sans-serif`,
                  },
                }}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextField
                type="email"
                value={value}
                onChange={onChange}
                error={errors?.email}
                label={t("label.email")}
                helperText={errors?.email?.message}
                inputProps={{
                  style: {
                    color: "#333",
                    fontSize: ".75rem",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: ".75rem",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontSize: ".65rem",
                    fontFamily: `'Poppins', sans-serif`,
                  },
                }}
              />
            )}
          />

          <Controller
            name="phone_num"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <MuiTelInput
                value={value}
                defaultCountry="ID"
                onChange={(val, info) => {
                  onChange(val);
                  setPhoneInfo(info);
                }}
                error={errors?.phone_num}
                label={t("label.noTelp")}
                helperText={errors?.phone_num?.message}
                inputProps={{
                  style: {
                    color: "#333",
                    fontSize: ".75rem",
                  },
                }}
                InputLabelProps={{
                  style: {
                    fontSize: ".75rem",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontSize: ".65rem",
                    fontFamily: `'Poppins', sans-serif`,
                  },
                }}
              />
            )}
          />
        </Stack>
      </Stack>

      <QRISDIalog isOpen={isOpenDialogQRIS} onClose={handleCloseDialogQRIS} />
    </FidyahLayout>
  );
};

export default PaymentManual;
