import { Outlet } from "react-router-dom";
import CompanyContact from "../features/CompanyContact";

export default function ContactDetail() {
  return (
    <div className="container fluid  ">
      <div className="row">
        <div className="col p-4 ">
          <CompanyContact />
        </div>
      </div>
      <div className="row">
        <div className="col p-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
