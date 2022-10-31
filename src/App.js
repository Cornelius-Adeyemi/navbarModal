import logo from './logo.svg';
import './App.css';

import { Home} from "./home"
import { Menu } from './menu';
import { Modal } from './modal';

function App() {
  return (
    <div className="App">
      <Home/>
      <Menu/>
      <Modal/>
    </div>
  );
}

export default App;
