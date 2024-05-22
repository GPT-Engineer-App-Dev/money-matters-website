import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import World from "./pages/World.jsx";
import Business from "./pages/Business.jsx";
import Opinion from "./pages/Opinion.jsx";
import Tech from "./pages/Tech.jsx";
import Markets from "./pages/Markets.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/world" element={<World />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/opinion" element={<Opinion />} />
        <Route exact path="/tech" element={<Tech />} />
        <Route exact path="/markets" element={<Markets />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;