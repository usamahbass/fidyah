import { Stack } from "@mui/material";
import { useEffect } from "react";
import { setCurrentRate } from "@fidyah/context/actions";
import { useStore } from "@fidyah/hooks/useStore";
import { useNavigate } from "react-router-dom";
import FidyahLayout from "@fidyah/layouts";
import HeroSection from "@fidyah/components/HeroSection/HeroSection";
import FidyahFormHaidContainer from "@fidyah/containers/FidyahFormHaidContainer";
import FidyahFormIllnesContainer from "@fidyah/containers/FidyahFormIllnessContainer";
import FidyahFormPregnancyContainer from "@fidyah/containers/FidyahFormPregnancyContainer";
import MakePayment from "@fidyah/components/MakePayment";
import FeatureSection from "@fidyah/components/FeatureSection/FeatureSection";
import { requests } from "@fidyah/utils/requests";
import { useState } from "react";
import { toRupiah } from "@fidyah/utils/helpers";
import LoadingGlobal from "@fidyah/components/Loading/LoadingGlobal";

const HomePages = () => {
  const navigate = useNavigate();
  const { dispatch } = useStore();

  const [isLoadingGetCurrentRate, setIsLoadingGetCurrentRate] = useState(false);

  const handleRequestCurrentRateFidyah = async () => {
    setIsLoadingGetCurrentRate(true);

    try {
      const response = await requests.get('/api/palugada/fidyah/rate');
      const respData = await response.data;

      if (response.status) {
        const currentRate = respData.data.currentValue;

        dispatch(setCurrentRate(toRupiah(currentRate)));
      }

    } finally {
      setIsLoadingGetCurrentRate(false);
    }
  };

  useEffect(() => {
    handleRequestCurrentRateFidyah();
  }, []);

  // useEffect(() => {
  //   /**
  //    * clearable state
  //    * @returns { 0, 0 }
  //    */
  //   dispatch(resetPayableData());
  //   dispatch(resetTotalQadha())
  // }, [dispatch]);

  const handleMakePayment = () => navigate("/pembayaran");

  if (isLoadingGetCurrentRate) return <LoadingGlobal />

  return (
    <FidyahLayout
      title="Home"
      bottomNavigation={
        <MakePayment
          title="general.makepayment"
          onMakePayment={handleMakePayment}
        />
      }>
      <HeroSection />
      <FeatureSection />
      <Stack spacing={6}>
        <FidyahFormHaidContainer />
        <FidyahFormIllnesContainer />
        <FidyahFormPregnancyContainer />
      </Stack>
    </FidyahLayout>
  );
};

export default HomePages;
