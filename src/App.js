import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Hakkimizda from "./Components/Hakkimizda/Hakkimizda";
import Iletisim from "./Components/Iletisim/Iletisim";
import Projeler from "./Components/Projeler/Projeler";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/projeler" element={<Projeler />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
