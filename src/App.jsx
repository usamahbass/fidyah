import { lazy, Suspense, useEffect } from "react";
import { setPayableHaid } from "./context/actions";
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
     * clearable
     */
    dispatch(setPayableHaid(0));
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
