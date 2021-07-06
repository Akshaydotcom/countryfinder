import React from 'react'
import axios from 'axios'
export const Country = props =>{
    const [countryDetails, setCountryDetails]=React.useState([])
    React.useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/name/'+props.countryName+'?fullText=true').then(res=>{
            if(res.status===200){
                setCountryDetails(res.data)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(countryDetails)
    return(
        <div className="countryDetails"> 
            {countryDetails.length!==0 && <div className="container row">
            <img className="countryDetailImage col" src={countryDetails[0].flag} alt="flag"/>
            <div className="col">
                <h5>{countryDetails[0].name}</h5>
                <div className="row">
                <div className="col">
                    Native Name:{countryDetails[0].nativeName}<br/>
                    Population:{countryDetails[0].population}<br/>
                    Region:{countryDetails[0].region}<br/>
                    Sub Region:{countryDetails[0].subregion}<br/>
                    Capital:{countryDetails[0].capital}<br/>
                </div>
                <div className="col">Top Level Domain: {countryDetails[0].topLevelDomain}</div>
                </div>
            </div>
            </div>}
        </div>
    )
}