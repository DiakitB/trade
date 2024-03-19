import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRecipeObject } from "../service/customerSlice";

export default function CustomerRow({ cust }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function clickHandler(id, company) {
    dispatch(getRecipeObject(id));
    navigate("text2");
  }
  const { company, division, id } = cust;
  return (
    <tr className="table-primary" onClick={() => clickHandler(id, company)}>
      <td>{company}</td>
      <td>{division}</td>
    </tr>
  );
}
