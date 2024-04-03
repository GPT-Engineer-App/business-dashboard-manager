import React from "react";
import { Routes, Route } from "react-router-dom";
import ManageOrders from "./ManageOrders";

const App = () => {
  return (
    <Routes>
      <Route path="/manage-orders" element={<ManageOrders />} />
    </Routes>
  );
};

export default App;
