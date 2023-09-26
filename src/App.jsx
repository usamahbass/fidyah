import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import LoadingGlobal from "./components/Loading/LoadingGlobal";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingGlobal />}>
        <Routes />
      </Suspense>
    </Router>
  );
};

export default App;
