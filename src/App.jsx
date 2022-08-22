import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Carrers from "./pages/Carrers/Carrers";
import Teams from "./pages/Teams/Teams";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="heading">
        <div className="bodycontent">
          <div className="container">
          <Router>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/team" element={<Teams/>} />
                <Route path="/carrer" element={<Carrers/>} />
              </Routes>
            </Router>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
