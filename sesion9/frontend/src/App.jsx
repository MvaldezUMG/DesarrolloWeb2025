import MyInput, {Otro, Otro2} from './components/MyInput'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Practices from './pages/Practices'
import Students from './pages/Students';
import "./App.css";

function MiBoton(){
   return (
    <button>Mi boton</button>
   )
}

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/practices">Practices</Link>
            </li>
             <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </nav>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/practices" element={<Practices />} />
           <Route path="/students" element={<Students />} />
           

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
