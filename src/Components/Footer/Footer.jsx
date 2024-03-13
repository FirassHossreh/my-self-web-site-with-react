import "./footer.css";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <h5>
          copy right by <span>firass hossreh</span>
        </h5>
        <div className="sosyal-medya-footer">
          <a href="https://twitter.com/home">
            <XIcon />
          </a>
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
    </>
  );
}
