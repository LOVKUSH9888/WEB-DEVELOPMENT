import logo from './logo.svg';
import './App.css';
import Header1 from './components/Header1';
import Footer1 from './components/Footer1';
import Notes from './components/Notes';
function App() {
  return (
    <div>
    <Header1/>  {/*Self Closing Tag*/ }
    <Footer1/>
    <Notes/>
    </div>
  );
}

export default App;
