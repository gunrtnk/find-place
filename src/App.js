import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Homepage from './component/place/Homepage'
import Card from './component/place/card'


function App() {
  return (
    <div className="App">
     <Navbar/>
   
     <Homepage/>
    
    </div>
  );
}

export default App;
