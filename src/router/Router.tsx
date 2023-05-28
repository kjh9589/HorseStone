import NotFound from "@/screens/error/NotFound";
import LandingScreen from "@/screens/landing/LadingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "@/screens/main/MainScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
