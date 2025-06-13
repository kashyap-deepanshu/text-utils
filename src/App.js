import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (mode === "light") {
      setMode("dark")
      setToggle(true);
     document.body.style.backgroundColor = "rgb(4, 59, 51)";
     document.body.style.color = "#ffffff";
    //  document.getElementsByClassName("navbarMode").style.backgroundColor="#04302a";
    } else {
      setMode("light");
      setToggle(false);
document.body.style.backgroundColor = "#ffffff";
document.body.style.color = "#111111";
    }
  }
  return (
    <div className="App">
      <Navbar title="Text-Utils" about="About" toggle={toggle} handleToggle={handleToggle} mode={mode} />
      <div className="container my-3">
        <TextForm heading={"Enter text to Analyze"} mode={mode} />
      </div>

    </div>
  );
}

export default App;
