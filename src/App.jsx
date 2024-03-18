import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLaout from "./ui/AppLayout";
import CustomerPage from "./pages/HomePage";
import ListCustomerPage from "./pages/ListCustomerPage";
import SecondTestingPage from "./ui/SecondTestingPage";

import CustomerDetail from "./pages/CustomerDetail";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="app" element={<AppLaout />}>
            <Route index element={<ListCustomerPage />} />
            <Route path="text2" element={<CustomerDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
