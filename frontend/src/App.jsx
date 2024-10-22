import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrdersPage from "./pages/order/OrdersPage";
import Layout from "./pages/layout/Layout";
import CustomerPage from "./pages/customer/CustomerPage";
import SalesPage from "./pages/SalesPage";
import ReportPage from "./pages/ReportPage";
import HomePage from "./pages/home/HomePage";
import InventoryPage from "./pages/inventory/InventoryPage";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/reports" element={<ReportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
