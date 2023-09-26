import { Stack } from "@mui/material";
import { useEffect } from "react";
import { setPayableHaid, setPayableIllness } from "@fidyah/context/actions";
import { useStore } from "@fidyah/hooks/useStore";

import FidyahLayout from "@fidyah/layouts";
import Header from "@fidyah/layouts/Header";
import HeroSection from "@fidyah/components/HeroSection/HeroSection";
import FidyahFormHaidContainer from "@fidyah/containers/FidyahFormHaidContainer";
import FidyahFormIllnesContainer from "@fidyah/containers/FidyahFormIllnessContainer";
import FidyahFormPregnancyContainer from "@fidyah/containers/FidyahFormPregnancyContainer";
import MakePaymentContainer from "@fidyah/containers/MakePaymentContainer";

const HomePages = () => {
  const { dispatch } = useStore();

  useEffect(() => {
    /**
     * clearable state
     * @returns { 0, 0 }
     */
    dispatch(setPayableHaid(0));
    dispatch(setPayableIllness(0));
  }, []);

  return (
    <FidyahLayout title="Home">
      <Header />
      <HeroSection />
      <Stack spacing={6}>
        <FidyahFormHaidContainer />
        <FidyahFormIllnesContainer />
        <FidyahFormPregnancyContainer />

        <MakePaymentContainer />
      </Stack>
    </FidyahLayout>
  );
};

export default HomePages;
