import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Model from "../ui/Model";
export default function ContactInfo() {
  const info = useSelector((state) => state.contact.contactInfo);
  console.log(info);
  const { name, lastName, email, phone, title, message } = info;
  console.log(message);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <p>
            {name} {lastName}
          </p>
          <p>Email:{email}</p>
          <p>Phon:{phone}</p>
          <Model name={name} />
        </div>
      </div>
      <div className="row">
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
      </div>
    </div>
  );
}
{
  /* <div>
        <p>
          {name} {lastName}
        </p>
        <p>Email: {email}</p>
        <p>Phon: {phone}</p>

        <Model name={name} />
      </div>
      {message?.map((str, index) => (
        <Accordion key={str}>
          <Accordion.Item eventKey={`${index}`}>
            <Accordion.Header>{`${index + 1}`}</Accordion.Header>
            <Accordion.Body>{str}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </> */
}
