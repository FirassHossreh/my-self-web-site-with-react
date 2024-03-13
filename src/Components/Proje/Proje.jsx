import "./proje.css";
export default function Proje(props) {
  return (
    <>
      <div className="proje-conainer">
        <div className="sum-containt">
          <h3 className="porje-title">{props.title}</h3>
          <p className="proje-containt">{props.containt}</p>
        </div>
        <div className="row">
          <div className="point">
            <div className="clean"></div>
          </div>
          <div className="point2">
            <div className="clean"></div>
          </div>
        </div>
        <img className="img-proje" src={props.img} alt="proje-fotografi" />
      </div>
    </>
  );
}
