import { Link, useNavigate } from "react-router-dom";
import Header from "../ui/Header";

export default function HomePage() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="container-fluid mt-4 ">
        <p>
          Welcome to
          <span></span>{" "}
          <span className="text-success fw-bold">EQUIMENT BOIFOR</span>.
          One-stop-shop for all your sawmill equipment. You no longer need to
          visit multiple suppliers to get the parts you need. We supply all the
          required components for your machinery and can even tailor them to
          your specific requirements..
        </p>
        <div className="container text-center">
          <Link to="/app" className="btn btn-primary px-5">
            ENTER
          </Link>
        </div>
      </div>
    </div>
  );
}
