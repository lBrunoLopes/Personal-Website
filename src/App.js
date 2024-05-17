import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Experience" element={<Experience />} />
        <Route path="Certificates" element={<Certificates />} />
      </Routes>
    </>
  );
}

export default App;

