import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
export default function ContactInfo() {
  const info = useSelector((state) => state.contact.contactInfo);
  console.log(info);
  const { name, lastName, email, phone, title, message } = info;
  console.log(message);

  return (
    <>
      <div>
        <h3>{name}</h3>
        <h3>{lastName}</h3>
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{title}</h3>
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
