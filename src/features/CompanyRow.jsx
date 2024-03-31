import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRecipeObject } from "../service/customerSlice";
import { Edit } from "../utilites/icons";

export default function CompanyRow({ cust }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function clickHandler(id) {
    dispatch(getRecipeObject(id));
    navigate("text2");
  }
  const { company, division, id } = cust;
  return (
    <>
      <tr className="table-primary " onClick={() => clickHandler(id, company)}>
        <td className="text-center">{company}</td>
        <td className="text-center">{division}</td>
        <td className="text-center">
          <button
            type="button"
            class="text-white bg-success
     to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 
     dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium
     rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => mutate(id)}
          >
            <Edit />
          </button>
        </td>
      </tr>
    </>
  );
}
