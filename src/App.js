import './App.css';

import Network from './Routes';
import Aos from "aos"
import "aos/dist/aos.css"




function App() {
  Aos.init({duration:2000});
  return (
  <Network/>
  );
}

export default App;
