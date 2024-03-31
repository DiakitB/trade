import { useSelector } from "react-redux";
import { CustomerData } from "../utilites/CustomerData";

export default function () {
  const id = useSelector((state) => state.recipe.recipe);
  const testData = CustomerData.find((x) => x.id === id);
  console.log(testData);
  const { message } = testData;
  console.log(message);
  return (
    <div className="container">
      {message?.map((mes, index) => (
        <div key={index}>
          <p>
            {index + 1}-{mes}
          </p>
        </div>
      ))}
    </div>
  );
}
