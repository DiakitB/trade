import { useSelector } from "react-redux";
import { CustomerData } from "../utilites/CustomerData";
import { useNavigate } from "react-router-dom";

export default function () {
  const id = useSelector((state) => state.recipe.recipe);
  const testData = CustomerData.find((x) => x.id === id);
  const navigate = useNavigate();
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
      <div className="text-center">
        <button className="btn btn-primary px-4" onClick={() => navigate(-1)}>
          Go back to contact list
        </button>
      </div>
    </div>
  );
}
