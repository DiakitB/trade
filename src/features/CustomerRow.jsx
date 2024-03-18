import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRecipeObject } from "../service/customerSlice";

export default function CustomerRow({ cust }) {
  const { name, buyer, email, id } = cust;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function clickHandler(id, name) {
    console.log(id, name);
    dispatch(getRecipeObject(id));
    navigate("text2");
  }

  return (
    <tr className="table-primary" onClick={() => clickHandler(id, name)}>
      <td>{name}</td>
      <td>{buyer}</td>
      <td>{email}</td>
    </tr>
  );
}
