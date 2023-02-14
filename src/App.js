import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import About from './Components/About';
import Enquire from './Components/Enquire';
import Product from './Components/Product';
import Testimoni from './Components/Testimoni';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Body />
      <About/>
      <Enquire />
      <Product/>
      <Testimoni/>
      <Footer/>
      
    </div>
  );
}

export default App;
