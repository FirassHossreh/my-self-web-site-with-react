import "./iletisim.css";
export default function Iletisim() {
  return (
    <>
      <div className="parent-form">
        <form action="">
          <input type="text" placeholder="Ad-Soyad" />
          <input type="email" placeholder="E-posta Adresi" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" value="Submit" className="btnS" />
        </form>
      </div>
    </>
  );
}
