import { Homepage } from './components/homepage'
import React from 'react'
import moon from '../src/icon-moon.svg'
import { NewWindow } from './components/NewWindow';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [darkMode, setDarkMode]=React.useState(true);
  const [country, setCountry]=React.useState('');
  const getCountryName = (CName)=>{
    window.scrollTo(0,0)
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
    <div className={darkMode?"App container-fluid":"App container-fluid body-light"}>
      <div className={!darkMode?' space-even row header-light':' space-even row header-dark'} >
        <h5 className="col-lg-10 col-md-10 col-sm-5 col-7">Where in the world?</h5>
            <span onClick={changeMode}>
                {darkMode?<img src={moon} alt="dark mode" />:<img src="https://img.icons8.com/ios/2x/sun.png" height="20px" alt="light mode" />}Dark Mode
            </span>
        </div>
      {country!==""&&<NewWindow countryName={country} getCountryName={getCountryName}></NewWindow>}
      <Homepage getCountryName={getCountryName} getMode={getMode} darkMode={darkMode}/>
      
    </div>
  );
}

export default App;
