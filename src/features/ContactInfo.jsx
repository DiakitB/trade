import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Model from "../ui/Model";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function ContactInfo() {
  const info = useSelector((state) => state.contact.contactInfo);
  console.log(info);
  const { name, lastName, email, phone, title, message } = info;
  console.log(message);

  return (
    <>
      <div className="container p">
        {/* <p>{name}</p>
        <h>{lastName}</h>
        <p>{email}</p>
        <h5>{phone}</h5> */}
        <Container className="mx-10 ms-0">
          <Row>
            <Col>
              {name} {lastName}
            </Col>
          </Row>
          <Row>
            <Col> Email: {email}</Col>
          </Row>
          <Row>
            <Col> Phone: {phone}</Col>
          </Row>
        </Container>

        <Model name={name} />
        <p></p>
      </div>
      {message?.map((str, index) => (
        <Accordion key={str}>
          <Accordion.Item eventKey={`${index}`}>
            <Accordion.Header>{`${index + 1}`}</Accordion.Header>
            <Accordion.Body>{str}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </>
  );
}
