import './App.css';
import Alert from './components/Alert';
import FormText from './components/FormText';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import About from "./components/About.js";


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [Mode , setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <NavBar title='Archit' mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route path="/about" element={<About mode={Mode} toggleMode={toggleMode} aboutText="About" />} />
            <Route path="/" element={<FormText showAlert={showAlert} heading="Enter Detail" mode={Mode} />}>
              
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
