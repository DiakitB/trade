import { useDispatch } from "react-redux";
import { getContactInfo } from "../service/contactInfoSlice";
import { useNavigate } from "react-router-dom";

export default function Company({ con }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(con);
  const { name, title } = con;
  function onClickHandler(contacte) {
    console.log(contacte);
    dispatch(getContactInfo(contacte));
    navigate("contact-info");
  }
  return (
    <tr className="table-primary" onClick={() => onClickHandler(con)}>
      <td>{name}</td>
      <td>{title}</td>
    </tr>
  );
}
