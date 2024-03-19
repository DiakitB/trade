import CustomerRow from "./CustomerRow";
import { CustomerData } from "../utilites/CustomerData";

export default function CustomerTabel() {
  const test = CustomerData;

  test.forEach((element) => {});

  return (
    <table className="table">
      <thead>
        <tr className="justify-center">
          <th scope="col">COMPANY</th>
          <th scope="col">DIVISION</th>
        </tr>
      </thead>
      <tbody>
        {test?.map((cust) => (
          <CustomerRow cust={cust} key={cust.id} />
        ))}
      </tbody>
    </table>
  );
}
