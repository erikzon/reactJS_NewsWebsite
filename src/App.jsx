import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={Home()} />
          <Route path="/services" element={Services()} />
          <Route path="/products" element={Products()} />
          <Route path="/sign-up" element={SignUp()} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
