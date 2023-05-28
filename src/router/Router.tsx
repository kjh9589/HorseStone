import HorseScreen from "@/screens/HorseScreen";
import NotFound from "@/screens/error/NotFound";
import LandingScreen from "@/screens/landing/LadingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/horseScreen" element={<HorseScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
