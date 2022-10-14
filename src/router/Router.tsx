import { Routes, Route } from "react-router-dom";
import Home from "../pages/home-page/Home";
import Store from "../pages/store-page/Store";
import About from "../pages/about-page/About";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
