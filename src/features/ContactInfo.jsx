import { useSelector } from "react-redux";

export default function ContactInfo() {
  const info = useSelector((state) => state.contact.contactInfo);
  console.log(info);
  const { name, lastName, email, phone, title } = info;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{lastName}</h3>
      <h3>{email}</h3>
      <h3>{phone}</h3>
      <h3>{title}</h3>
    </div>
  );
}
// {
//   "name": "jean",
//   "lastName": "oullette",
//   "email": "babacar@gmail.com",
//   "phone": "123 456 78910",
//   "title": "it"
// }
