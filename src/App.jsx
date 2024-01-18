import { Suspense } from "react";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import LoadingGlobal from "./components/Loading/LoadingGlobal";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingGlobal />}>
        <SnackbarProvider />
        <Routes />
      </Suspense>
    </Router>
  );
};

export default App;
