import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTheme('dark'); // Default to normal dark mode
      document.body.style.backgroundColor = '#141414';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Darkmode'
    } else {
      setMode('light');
      setTheme('light');
      document.body.style.backgroundColor = '#F9F9F9';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Lightmode'
    }
  }

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.body.style.backgroundColor = '#141414';
      document.body.style.color = 'white';
    } else if (newTheme === 'dark-blue') {
      document.body.style.backgroundColor = '#001020';
    } else if (newTheme === 'dark-green') {
      document.body.style.backgroundColor = '#012301';
    }
    showAlert(`${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme has been enabled`, "success");
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} theme={theme} setTheme={handleThemeChange} toggleMode={toggleMode} />
      <Alert alert={alert} />

        <div className="container my-4">

      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to convert" mode={mode} />} />
        <Route exact path="about/"  element={<About mode={mode} theme={theme} />}/>
      </Routes>

        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
