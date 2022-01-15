/* eslint-disable array-callback-return */
import React, {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios'
export const Homepage = (props)=>{
    const searchInput=React.createRef()
    const [allCountries, setAllCountries]=useState([]);
    let [searchValue, setSearchValue]=useState('')
    let [searchResults, setSearchResults]=useState({})
    useEffect(()=>{
        axios.get('https://restcountries.com/v2/all').then(res=>{
            if(res.status===200){
                setAllCountries(res.data)
            }
        })
    },[])

    const filterByRegion=(e)=>{
        if(e.target.text.toLowerCase()!=='all'){
        axios.get('https://restcountries.com/v2/region/'+e.target.text.toLowerCase()).then(res=>{
            if(res.status===200){
                setAllCountries(res.data)
            }
        })}
        else{
            axios.get('https://restcountries.com/v2/all').then(res=>{
            if(res.status===200){
                setAllCountries(res.data)
            }
        })
        }
    }

    const searchCountry=()=>{
        searchValue=searchInput.current.value.toLowerCase();
        setSearchValue(searchValue)
    }

    React.useEffect(()=>{
        allCountries.map((country)=>{
            if(country.name.toLowerCase()===searchValue){
               setSearchResults(country)
            }
        })
    },[searchValue, allCountries])

    return (<div className={props.darkMode?"container-fluid":"container-fluid body-light"} >
        <div className="row pt-5">
            <div className="col-lg-10 col-md-10 col-sm-5 col-7">
                <input type="text" placeholder="Search for a country" className={props.darkMode?"dark-input":"light-input"} ref={searchInput} onChange={searchCountry} style={{marginLeft:"3rem"}}/>
            </div>
            <Dropdown className="dark-dropdown">
                <Dropdown.Toggle>Filter by Region</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={filterByRegion}>Africa</Dropdown.Item>
                    <Dropdown.Item onClick={filterByRegion}>Asia</Dropdown.Item>
                    <Dropdown.Item onClick={filterByRegion}>Americas</Dropdown.Item>
                    <Dropdown.Item onClick={filterByRegion}>Europe</Dropdown.Item>
                    <Dropdown.Item onClick={filterByRegion}>Oceania</Dropdown.Item>
                    <Dropdown.Item onClick={filterByRegion}>All</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className="grid">
            {!searchValue?
            (allCountries && allCountries.length!==0 && allCountries.map((country)=>(
                    <Card className={props.darkMode?"mr-3 ml-3 mb-3 mt-3 card-body-dark":"mr-3 ml-3 mb-3 mt-3 card-body-light"} style={{width:'15rem',display:"inline-flex",  
                    boxShadow:"0px 5px 15px 5px rgba(0,0,0,0.23)"}} onClick={()=>props.getCountryName(country.name)}>
                    <Card.Img variant="top" src={country.flag} style={{height:'158px'}}></Card.Img>
                    <Card.Body>
                        <Card.Text>
                            <div >
                                <div className="card-head">{country.name}</div>
                                <div>Population: {country.population}</div>
                                <div>Region: {country.region}</div>
                                <div>Capital: {country.capital}</div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))):(searchResults && searchResults.length!==0 && <Card className={props.darkMode?"mr-3 mb-3 mt-2 card-body-dark":"mr-3 mb-3 mt-2 card-body-light"} style={{width:'15rem',display:"inline-flex",boxShadow:"0px 5px 15px 5px rgba(0,0,0,0.23)"}} onClick={()=>props.getCountryName(searchResults.name)}>
            <Card.Img  variant="top" src={searchResults.flag} style={{height:'158px'}}></Card.Img>
            <Card.Body>
                <Card.Text>
                    <div >
                        <div className="card-head">{searchResults.name}</div>
                        <div>Population: {searchResults.population}</div>
                        <div>Region: {searchResults.region}</div>
                        <div>Capital: {searchResults.capital}</div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>)
        }
            
        </div>
    </div>)
}