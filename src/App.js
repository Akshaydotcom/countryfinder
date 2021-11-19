import { Homepage } from './components/homepage'
import React from 'react'
import moon from '../src/icon-moon.svg'
import sun from '../src/icon-sun.svg'
import { Country } from './components/country';
import { NewWindow } from './components/NewWindow';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [darkMode, setDarkMode]=React.useState(true);
  const [country, setCountry]=React.useState('');
  const getCountryName = (CName)=>{
    setCountry(CName.toLowerCase())
  }
  const getMode=(mode)=>{
    setDarkMode(mode)
  }
  const changeMode=()=>{
    if(darkMode) setDarkMode(false)
    else setDarkMode(true)
  }
  return (
    <div className="App container">
      <div className={!darkMode?' row header-light':' row header-dark'} >
        <h5 className="col-lg-10 col-md-10 col-sm-5 col-7">Where in the world?</h5>
            <span onClick={changeMode}>
                {darkMode?<img src={moon} alt="dark mode" />:<img src={sun} alt="dark mode" />}Dark Mode
            </span>
        </div>
      {country&&<NewWindow><Country countryName={country} /></NewWindow>}
      <Homepage getCountryName={getCountryName} getMode={getMode}/>
      
    </div>
  );
}

export default App;
