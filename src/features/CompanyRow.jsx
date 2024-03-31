import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRecipeObject } from "../service/customerSlice";

export default function CompanyRow({ cust }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function clickHandler(id) {
    dispatch(getRecipeObject(id));
    navigate("text2");
  }
  const { company, division, id } = cust;
  return (
    <tr className="table-primary " onClick={() => clickHandler(id, company)}>
      <td className="text-center">{company}</td>
      <td className="text-center">{division}</td>
    </tr>
  );
}
