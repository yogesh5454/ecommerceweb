import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Categories from "./Categories/Categories";
import Vegetables from "./Categories/Vegetables/Vegetables";
import Snacks from "./Categories/Snacks/Snacks";
import RicePulse from "./Categories/RicePulse/RicePulse";
import Meat from "./Categories/Meat/Meat";
import Fruits from "./Categories/Fruits.jsx/Fruits";
import Fish from "./Categories/Fish/Fish";
import DairyEggs from "./Categories/DairyEggs/DairyEggs";
import Bakery from "./Categories/Bakery/Bakery";

const Dailyneeds = () => {
  return (
    <div>
      
      <Routes>
        <Route index element={<Categories />} />
        <Route path="vegetables" element={<Vegetables />} />
        <Route path="snacks" element={<Snacks />} />
        <Route path="ricepulse" element={<RicePulse />} />
        <Route path="meat" element={<Meat />} />
        <Route path="fruits" element={<Fruits />} />
        <Route path="fish" element={<Fish />} />
        <Route path="dairyeggs" element={<DairyEggs />} />
        <Route path="bakery" element={<Bakery />} />
      </Routes>
    </div>
  );
};

export default Dailyneeds;
