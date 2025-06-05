import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';


function App() {
  return (
    <div className="App">
     <Navbar title="Text-Utils" about="About"/>
    <div className="container my-3">
      <TextForm heading={"Enter text to Analyze"}/>
      </div> 
      
    </div>
  );
}

export default App;
