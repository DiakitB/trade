import CustomerRow from "./CustomerRow";
import { CustomerData } from "../utilites/CustomerData";

export default function CustomerTabel() {
  const test = CustomerData;
  console.log(test);
  test.forEach((customer) => console.log(customer.name, customer.buyer));
  return (
    <table className="table">
      <thead>
        <tr className="justify-center">
          <th scope="col">COMPANY</th>
          <th scope="col">BUYER</th>
          <th scope="col">Email</th>
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
