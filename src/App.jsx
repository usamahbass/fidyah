import FidyahLayout from "./layouts";
import Header from "./layouts/Header";
import HeroSection from "./components/HeroSection/HeroSection";

const App = () => {
  return (
    <FidyahLayout>
      <Header />
      <HeroSection />
    </FidyahLayout>
  );
};

export default App;
