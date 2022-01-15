import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import { Country } from './country';
const modalRoot = document.getElementById('modal-root')
export const NewWindow = (props) => {
  const [countryName, setCountryName]=useState(props.countryName)
  console.log(countryName)
  useEffect(()=>{
    setCountryName(props.countryName)
  },[props.countryName])
    return ReactDom.createPortal(<div style={{
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      display: "grid",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(15, 15, 15, 0.8)"
    }}><Country  props={props}/></div>,modalRoot)
  };