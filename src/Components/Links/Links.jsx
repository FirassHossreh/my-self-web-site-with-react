import "./Links.css";
import { Link } from "react-router-dom";
export default function Links() {
  return (
    <>
      <div className="links">
        <Link to="/hakkimizda">Hakkimizda</Link>
        <Link to="/projeler">Projeler</Link>
        <Link to="/iletisim">Iletisim</Link>
      </div>
    </>
  );
}
