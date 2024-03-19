import { Outlet } from "react-router-dom";
import Custormer from "../features/Customer";

export default function CustomerDetail() {
  return (
    <div>
      <Custormer />
      <Outlet />
    </div>
  );
}
