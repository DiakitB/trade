import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLaout from "./ui/AppLayout";
import ContactInfo from "./features/ContactInfo";
import ContactDetail from "./pages/ContactDetail";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyNotes from "./ui/CompanyNotes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="notes" element={<CompanyNotes />} />
          <Route path="app" element={<AppLaout />}>
            <Route index element={<CompaniesPage />} />
            <Route path="text2" element={<ContactDetail />}>
              <Route path="contact-info" element={<ContactInfo />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
