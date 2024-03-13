import "./Home.css";
import Section from "../Section/Section";
import Container from "../Container/Container";
import HeaderSkils from "../HeaderSkils/HeaderSkils";
import Card from "../Card/Card";
import htmlImg from "../../assets/HTML5_logo_and_wordmark.svg.png";
import cssImg from "../../assets/CSS3_logo_and_wordmark.png";
import jsImg from "../../assets/Unofficial_JavaScript_logo_2.svg.png";
import reactImg from "../../assets/React.svg.png";
export default function Home() {
  return (
    <>
      <Container>
        <Section />
      </Container>
      <Container>
        <HeaderSkils />
        <Card width="90%" img={htmlImg} deg="45deg" />
        <Card width="60%" img={cssImg} />
        <Card width="50%" img={jsImg} />
        <Card width="50%" img={reactImg} />
      </Container>
    </>
  );
}
