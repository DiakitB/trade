import { Outlet, useNavigate } from "react-router-dom";

import Header from "./Header";
export default function AppLaout() {
  return (
    <div className="app-layout">
      <Header />
      <div className="container-fluid mt-3">
        <Outlet />
      </div>
    </div>
  );
}
