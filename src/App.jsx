import { lazy, Suspense, useEffect } from "react";
import { setPayableHaid, setPayableIllness } from "./context/actions";
import { useStore } from "./hooks/useStore";

const FidyahLayout = lazy(() => import("./layouts"));
const Header = lazy(() => import("./layouts/Header"));
const LoadingGlobal = lazy(() => import("./components/Loading/LoadingGlobal"));
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"));
const FidyahFormHaidContainer = lazy(() =>
  import("./containers/FidyahFormHaidContainer")
);
const FidyahFormIllnesContainer = lazy(() =>
  import("./containers/FidyahFormIllnessContainer")
);

const App = () => {
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
    <Suspense fallback={<LoadingGlobal />}>
      <FidyahLayout>
        <Header />
        <HeroSection />
        <FidyahFormHaidContainer />
        <FidyahFormIllnesContainer />
      </FidyahLayout>
    </Suspense>
  );
};

export default App;
