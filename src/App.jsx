import { lazy, Suspense } from "react";
import LoadingGlobal from "./components/Loading/LoadingGlobal";

const FidyahLayout = lazy(() => import("./layouts"));
const Header = lazy(() => import("./layouts/Header"));
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"));
const FidyahFormContainer = lazy(() =>
  import("./containers/FidyahFormContainer")
);

const App = () => {
  return (
    <Suspense fallback={<LoadingGlobal />}>
      <FidyahLayout>
        <Header />
        <HeroSection />
        <FidyahFormContainer />
      </FidyahLayout>
    </Suspense>
  );
};

export default App;
