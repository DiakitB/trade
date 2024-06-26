import CompanyRow from "./CompanyRow";
import { CustomerData } from "../utilites/CustomerData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CompaniesTabel() {
  const [filteredUsers, setFilteredUsers] = useState(CustomerData);
  const navigate = useNavigate();
  const test = CustomerData;

  console.log(test);
  const handleFilter = (event) => {
    const value = event.target.value;
    const valueUppercase = value.toUpperCase();
    const filtered = test?.filter((comp) =>
      comp.company.includes(valueUppercase)
    );

    setFilteredUsers(filtered);
  };

  return (
    <>
      <div className="container text-center mb-2">
        <input
          placeholder="Search for company"
          type="text"
          onChange={handleFilter}
        />
      </div>
      <table className="table table-dark table-striped">
        <thead>
          <tr className="justify-center">
            <th scope="col">
              <h6 className="font-italic text-success fst-italic fw-bold text-uppercase">
                Company
              </h6>
            </th>
            <th scope="col">
              <h6 className="font-italic text-success fst-italic fw-bold text-uppercase">
                Division
              </h6>
            </th>
            {/* <th scope="col" className="text-center">
              <h6 className="font-italic text-success fst-italic fw-bold text-uppercase">
                Setting
              </h6>
            </th> */}
          </tr>
        </thead>
        <tbody>
          {filteredUsers?.map((cust) => (
            <CompanyRow cust={cust} key={cust.id} />
          ))}
        </tbody>
      </table>
      <div className="container text-center">
        <button
          type="button"
          class="btn btn-primary btn-lg "
          onClick={() => navigate("/form")}
        >
          Add a New Company
        </button>
      </div>
    </>
  );
}
