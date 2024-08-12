import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message , type)=>{
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(() =>{
      setAlert(null);
  }, 1500)
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = '#141414';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success" );
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#F9F9F9';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success" );
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-4  ">
    <TextForm showAlert={showAlert} heading = "Enter the text to convert" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
