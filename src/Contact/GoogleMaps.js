import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Gapp=styled.iframe`
    border: 0;
    position: relative;
    min-height: 500px;
    width: 700px;
    max-width:100%;
    
    border-right: solid transparent 30px;

    

    `
export default class GoogleMaps extends React.Component {

    


  render() {
    return (<Gapp 
    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.458987717842!2d20.157374915715184!3d50.002751779416144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471647312145a499%3A0x75bb05adb8d477e!2sZakrzowiec%2079%2C%2032-003%20Zakrzowiec!5e0!3m2!1sen!2spl!4v1648993324545!5m2!1sen!2spl"} 
    
    />
    )
        
    
  }
}