import React from 'react';
import './src/App.css';
import Affichage from "./src/components/Affichage";
import Navbar from "./src/components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './src/components/Search';

const App = () => {
  return (
    function App() {
      const [count, setCount] = useState(0)
    
      return (
        <div className='bg-color'>
          <NavBar/>
          <Search/>
        </div>
      )
    }
  );
};

export default App;

