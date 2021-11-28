import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './COMPONENTS/Country/Country';
import Cart from './COMPONENTS/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, []);

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
   
    setCart(newCart);
  }

  return (
    <div className="App">
      {countries.length}
      <Cart cart={cart}></Cart>

      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.cca2}></Country>)
      }



      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
