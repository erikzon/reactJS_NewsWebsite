import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Noticias from "./components/pages/Noticias";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={Home()} />
          <Route path="/noticias" element={Noticias()} />
          <Route path="/products" element={Products()} />
          <Route path="/sign-up" element={SignUp()} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
