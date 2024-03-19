import { useSelector } from "react-redux";
import { CustomerData } from "../utilites/CustomerData";
import { useForm } from "react-hook-form";
import Company from "./Company";

export default function Custormer() {
  const id = useSelector((state) => state.recipe.recipe);
  console.log(id);
  const data = CustomerData;
  const testData = data.find((x) => x.id === id);

  const contactList = testData?.contact;

  return (
    <table className="table">
      <thead>
        <tr className="justify-center">
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
