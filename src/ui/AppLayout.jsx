import { Outlet, useNavigate } from "react-router-dom";

import Header from "./Header";
import { Col, Container, Row } from "react-bootstrap";
export default function AppLaout() {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col>
          <Header />
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
