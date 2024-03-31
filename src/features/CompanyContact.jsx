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
    <>
      <div className="container text-center fw-bold bg-success text-white">
        <p>Click on any name to get more info</p>
      </div>
      <table className="table ">
        <thead>
          <tr className="justify-center">
            <th scope="col" className="font-italic">
              <h2 className="font-italic text-success fst-italic fw-bold">
                {testData.company}
              </h2>
            </th>
            <th scope="col">
              <h2 className="font-italic text-success fst-italic fw-bold">
                {testData.division}
              </h2>
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
      <div className="container text-center">
        <button
          className="btn btn-warning p-x-4 text-center"
          onClick={() => navigate("/notes")}
        >
          GET NOTES ABOUT {testData.company}
        </button>
      </div>
    </>
  );
}
