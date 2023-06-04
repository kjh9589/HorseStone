import NotFoundScreen from "@/screens/error/NotFoundScreen";
import LandingScreen from "@/screens/landing/LadingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainScreen from "@/screens/main/MainScreen";
import ErrorScreen from "@/screens/error/ErrorScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
