import { Outlet, useNavigate } from "react-router-dom";

import Header from "./Header";
export default function AppLaout() {
  const navigate = useNavigate();
  return (
    <div className="app-layout">
      <Header />
      <div class="container-fluid bg-danger">
        <Outlet />
      </div>
    </div>
  );
}
