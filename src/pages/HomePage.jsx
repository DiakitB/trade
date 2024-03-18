import { Link, useNavigate } from "react-router-dom";
import Header from "../ui/Header";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          voluptatum delectus dolorum consectetur eum minima rem, sed, in itaque
          soluta expedita quas ipsum cumque quos suscipit quo doloremque iste
          aperiam.
        </p>
        <Link to="/app" className="btn btn-primary">
          ENTER
        </Link>
      </div>
    </div>
  );
}
