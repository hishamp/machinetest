import { Route, Routes, Navigate } from "react-router-dom";
import Cashier from "../views/cashier/Cashier";
import Home from "../views/home/Home";
import MainPage from "../views/MainPage/MainPage";
import Settings from "../views/settings/settings";
import Transactions from "../views/transations/Transaction";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/cashier" element={<Cashier />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
