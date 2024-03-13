import "./section.css";
import imge from "../../assets/WhatsApp Image 2023-10-10 at 5.55.26 PM.jpeg";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Section() {
  return (
    <>
      <div className="containt">
        <h1>benim adim firass</h1>
        <p className="p1">ben frontend developer</p>
        <p className="p2">iletisim icin bu sosyal medya hesaplarim</p>
        <div className="sosyal-medya">
          <a href="https://twitter.com/home">
            <XIcon />
          </a>{" "}
          <a href="https://twitter.com/home">
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/home">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/home">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="imge">
        <img src={imge} alt="sahsi fotograf" />
      </div>
    </>
  );
}
