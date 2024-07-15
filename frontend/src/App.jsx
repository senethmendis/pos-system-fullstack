import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import Layout from "./pages/layout/Layout";
import CustomerPage from "./pages/CustomerPage";
import SalesPage from "./pages/SalesPage";
import ReportPage from "./pages/ReportPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/reports" element={<ReportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
