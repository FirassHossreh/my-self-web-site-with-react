import Container from "../Container/Container";
import Proje from "../Proje/Proje";
import "./projeler.css";
import img from "../../assets/Screenshot 2024-03-12 075026.png";
export default function Projeler() {
  return (
    <>
      <div className="height-container">
        <Container>
          <Proje
            title="self web site"
            containt="my first react self web site"
            img={img}
          />
        </Container>
      </div>
    </>
  );
}
