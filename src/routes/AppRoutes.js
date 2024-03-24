import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import HomepageFood from "../pages/HomepageFood";
import HomepageBig from "../pages/HomepageBig";
import HomepageWater from "../pages/HomepageWater";
import HomepageBazaar from "../pages/HomepageBazaar";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/yemek" element={<HomepageFood />} />
      <Route path="/buyuk" element={<HomepageBig />} />
      <Route path="/su" element={<HomepageWater />} />
      <Route path="/carsi" element={<HomepageBazaar />} />
    </Routes>
  );
};
