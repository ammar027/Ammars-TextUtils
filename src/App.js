import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {

  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container my-4  ">
    <TextForm heading = "Enter the text to convert"/>
    </div>
    </>
  );
}

export default App;
