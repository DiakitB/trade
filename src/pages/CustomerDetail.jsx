import { Outlet } from "react-router-dom";
import Custormer from "../features/Customer";
import { Col, Container, Row } from "react-bootstrap";

export default function CustomerDetail() {
  return (
    <div className="container fluid  ">
      <div className="row">
        <div className="col p-4 ">
          <Custormer />
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
