import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import ManageWorkers from "./pages/ManageWorkers";
import ManageOrders from "./pages/ManageOrders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/manage-workers" element={<ManageWorkers />} />
        <Route path="/manage-orders" element={<ManageOrders />} />
      </Routes>
    </Router>
  );
}

export default App;
