/* eslint-disable array-callback-return */
import React from "react";
import "./country.css";
import axios from "axios";
export const Country = (props) => {
  const [countryDetails, setCountryDetails] = React.useState([]);
  const [borderCountries, setBorderCountries] = React.useState([]);
  const [borderCodes, setBorderCodes] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/name/" +
          props.props.countryName +
          "?fullText=true"
      )
      .then((res) => {
        if (res.status === 200) {
          setCountryDetails(res.data);
          setBorderCodes(res.data[0].borders);
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    if (borderCodes?.length > 0) {
      let codes = "";
      borderCodes.forEach((border) => {
        codes = codes + border + ";";
      });
      axios
        .get(
          "https://restcountries.com/v2/alpha?codes=" + codes + "fields=name"
        )
        .then((res) => {
          if (res.status === 200) {
            setBorderCountries(res.data);
          }
        });
    }
  }, [countryDetails, borderCodes]);
  const changeCountry = (countryName) => {
    props.props.getCountryName(countryName);
  };
  return (
    <div className="countryDetails" style={{}}>
      {countryDetails.length !== 0 && (
        <div className="container row">
          <img
            className="countryDetailImage col"
            src={countryDetails[0] && countryDetails[0].flag}
            alt="flag"
            style={{ height: "300px" }}
          />
          <div className="col">
            <h5>{countryDetails[0].name}</h5>
            <div className="row">
              <div className="col">
                Native Name:{countryDetails[0].nativeName}
                <br />
                Population:{countryDetails[0].population}
                <br />
                Region:{countryDetails[0].region}
                <br />
                Sub Region:{countryDetails[0].subregion}
                <br />
                Capital:{countryDetails[0].capital}
                <br />
              </div>
              <div className="col">
                Top Level Domain: {countryDetails[0].topLevelDomain}
                <br />
                Currencies: {countryDetails[0].currencies[0].name}
                <br />
                Languages:{" "}
                {countryDetails[0].languages.map((language) => {
                  return <span className="pr-1">{language.name}</span>;
                })}
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-4 pl-0">
                  Border Country:{" "}
                  {borderCountries.map((bCountry) => {
                    if (bCountry !== null) {
                      return <span>{bCountry.name}</span>;
                    }
                  })}
                  <div>
                    <button
                      type="button"
                      class="btn btn-secondary mr-2 mb-2"
                      onClick={() => changeCountry("")}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
