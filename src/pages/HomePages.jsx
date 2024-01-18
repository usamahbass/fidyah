import { Stack } from "@mui/material";
import { useEffect } from "react";
import { setPayableHaid, setPayableIllness } from "@fidyah/context/actions";
import { useStore } from "@fidyah/hooks/useStore";
import { useNavigate } from "react-router-dom";
import FidyahLayout from "@fidyah/layouts";
import HeroSection from "@fidyah/components/HeroSection/HeroSection";
import FidyahFormHaidContainer from "@fidyah/containers/FidyahFormHaidContainer";
import FidyahFormIllnesContainer from "@fidyah/containers/FidyahFormIllnessContainer";
import FidyahFormPregnancyContainer from "@fidyah/containers/FidyahFormPregnancyContainer";
import MakePayment from "@fidyah/components/MakePayment";
import FeatureSection from "@fidyah/components/FeatureSection/FeatureSection";

const HomePages = () => {
  const navigate = useNavigate();
  const { dispatch } = useStore();

  useEffect(() => {
    /**
     * clearable state
     * @returns { 0, 0 }
     */
    dispatch(setPayableHaid(0));
    dispatch(setPayableIllness(0));
  }, []);

  const handleMakePayment = () => navigate("/pembayaran");

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
