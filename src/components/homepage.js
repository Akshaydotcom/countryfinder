import React, {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import moon from '../../src/icon-moon.svg'
import sun from '../../src/icon-sun.svg'
export const Homepage = ()=>{
    const [lightMode, setLightMode]=useState(false)
    const changeMode=()=>{
        if(lightMode){
            setLightMode(false)
        }else{
            setLightMode(true)
        }
    }
    useEffect(()=>{
        setLightMode(false)
    },[])
    return (<div className="container" >
        <div className={lightMode?' row header-light':' row header-dark'} >
        <h5 className="col-lg-10 col-md-10 col-sm-5 col-7">Where in the world?</h5>
            <span onClick={changeMode}>
                {!lightMode?<img src={moon} alt="dark mode" />:<img src={sun} alt="dark mode" />}Dark Mode
            </span>
        </div>
        <div className="row pt-5">
            <div className="col-lg-10 col-md-10 col-sm-5 col-7">
                <input type="text" placeholder="Search for a country" className="dark-input"/>
            </div>
            <Dropdown className="dark-dropdown">
                <Dropdown.Toggle>Filter by Region</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Africa</Dropdown.Item>
                    <Dropdown.Item>Asia</Dropdown.Item>
                    <Dropdown.Item>America</Dropdown.Item>
                    <Dropdown.Item>Europe</Dropdown.Item>
                    <Dropdown.Item>Oceania</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className="grid"></div>
    </div>)
}