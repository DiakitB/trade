import { Outlet } from "react-router-dom";
import Custormer from "../features/Customer";
import { Col, Container, Row } from "react-bootstrap";

export default function CustomerDetail() {
  return (
    <Container>
      <Row>
        <Col>
          <Custormer />
        </Col>
      </Row>
      <Row>
        <Col>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
