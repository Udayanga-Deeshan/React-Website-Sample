
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <Routes> 

          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
            

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
