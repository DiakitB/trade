import CompanyRow from "./CompanyRow";
import { CustomerData } from "../utilites/CustomerData";

export default function CompaniesTabel() {
  const test = CustomerData;

  test.forEach((element) => {});

  return (
    <table className="table">
      <thead>
        <tr className="justify-center">
          <th scope="col">
            <h6>Company</h6>
          </th>
          <th scope="col">
            <h6>Division</h6>
          </th>
        </tr>
      </thead>
      <tbody>
        {test?.map((cust) => (
          <CompanyRow cust={cust} key={cust.id} />
        ))}
      </tbody>
    </table>
  );
}
