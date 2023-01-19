import logo from './logo.svg';
import './App.css';
import Header1 from './component/Header1'

function App() {
  return (
    <div>
    <Header1 name= "vinod" last ="Kumar"/>
    <Header1 name= "Shariq" last ="khan"/>
    <Header1 name= "Yolo" last ="Jolo"/>
    
    {/*Creating a Child P here*/}
    <p>Lovkush is a noob coder for now</p>
    </div>
  );
}

export default App;
