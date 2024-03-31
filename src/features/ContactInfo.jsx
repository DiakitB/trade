import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Model from "../ui/Model";
import Stack from "react-bootstrap/Stack";
export default function ContactInfo() {
  const info = useSelector((state) => state.contact.contactInfo);
  console.log(info);
  const { name, lastName, email, phone, title, message } = info;
  console.log(message);

  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-sm-12">
          <Stack>
            <div className="p-2">
              {name} {lastName}
            </div>
            <div className="p-2">Email: {email}</div>
            <div className="p-2">Phone: {phone}</div>
          </Stack>
          <Model name={name} />
        </div>
      </div>
      {/* <div className="row">
        <div className="col-sm-12">
          {message?.map((str, index) => (
            <Accordion key={str}>
              <Accordion.Item eventKey={`${index}`}>
                <Accordion.Header>{`${index + 1}`}</Accordion.Header>
                <Accordion.Body>{str}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </div> */}
    </div>
  );
}
