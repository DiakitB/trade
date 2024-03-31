import { useSelector } from "react-redux";
import { CustomerData } from "../utilites/CustomerData";
import Company from "./Company";
import { useNavigate } from "react-router-dom";

export default function CompanyContact() {
  const id = useSelector((state) => state.recipe.recipe);
  const navigate = useNavigate();
  console.log(id);
  const data = CustomerData;

  const testData = data.find((x) => x.id === id);
  const { message } = testData;
  const contactList = testData?.contact;

  return (
    <table className="table ">
      <thead>
        <tr className="justify-center">
          <th scope="col">{testData.company}</th>
          <th scope="col">{testData.division}</th>
        </tr>
        <tr className="justify-center">
          <th scope="col" className="text-center">
            <h4>Click on any name to get more information</h4>
          </th>
        </tr>
        <tr className="justify-center bg-primary">
          <th scope="col" className="text-center">
            <button
              className="btn btn-warning"
              onClick={() => navigate("/notes")}
            >
              GET NOTES
            </button>
          </th>
        </tr>
        <tr className="">
          <th scope="col">Name</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        {contactList?.map((con) => (
          <Company con={con} key={con.name} />
        ))}
      </tbody>
    </table>
  );
}
