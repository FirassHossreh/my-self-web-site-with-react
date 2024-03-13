import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className="parent-card">
        <div
          className="containt-card"
          style={{ ":hover": { transform: "rotate(35deg)" } }}
        >
          <div className="containt-dont-level">
            <h1>html</h1>
            <img src={props.img} alt="html" className="htmlImg" />
          </div>
          <div className="level">
            <div className="accept-level" style={{ width: props.width }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
