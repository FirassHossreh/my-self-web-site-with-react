import Container from "../Container/Container";
import "./Hakkimizda.css";
import Paragraf from "../Paragraf/Paragraf";
export default function Hakkimizda() {
  return (
    <>
      <Container>
        <div className="containt-hakkimizda">
          <h1>benim adim firass hossreh</h1>
          <h4>ben bir frontend developer</h4>
          <Paragraf
            containt="ben sakarya universitesinde bilisim sistemler muhendisligi okuyorum
            ve ucuncu siniftayim"
          />
          <Paragraf containt="ben 2002 suriyede Homs sehirinde dogdum ve ben suanda 22 yasindayim" />
          <Paragraf
            containt=" ben kendi projelerimi gelistirmeye calisiyorum ve site bir cv
            mayetinde gibi olacak"
          />
        </div>
      </Container>
    </>
  );
}
