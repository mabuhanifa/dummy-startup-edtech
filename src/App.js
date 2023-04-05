import { Route, Routes } from "react-router-dom";
import "./App.css";
import Courses from "./pages/Courses";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;
