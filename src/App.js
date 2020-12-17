import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';
import Land from './components/Land/Land';

function App() {
  const [countries, setCountries] = useState([]);
  const [land, setLand] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=> res.json())
    .then(data=> {
      setCountries(data)
      // const name =data.map(country => country.name)
      // console.log(name);
    })
    .catch(error=> console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newLand = [...land, country]
    setLand(newLand);
  };   

  return (
    <div className="App">
      <h1>countries: {countries.length}</h1>
      <h3>country added: {land.length}</h3>
      <Land land = {land}></Land>

      {
        countries.map( country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
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
