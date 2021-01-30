import { useState } from 'react';
import GreeterClass from '../GreeterClass';
import GreeterFunctional from '../GreeterFunctional';
import logo from '../../assets/logo.svg';
import './Header.scss';

function Header() {
  const [show, setShow] = useState(true);
  
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload.</p>
        {show&&<GreeterClass className="App-greeterClass"/>}
        {show&&<GreeterFunctional className="App-greeterFunctional"/>}
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <button onClick={() => setShow(!show)}> Show / Hide</button>
      </header>
   
  );
}

export default Header;
