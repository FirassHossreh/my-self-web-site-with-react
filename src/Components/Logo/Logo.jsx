import "./logo.css";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <>
      <Link to="/home">
        <div className="logo"> firass</div>
      </Link>
    </>
  );
}
