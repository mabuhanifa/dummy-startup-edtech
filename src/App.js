import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Courses from "./pages/Courses";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="2xl:px-40 xl:px-20 px-10 py-10">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
