import React from "react";
import './button.css'

function Button(props){
    return (
        <>
        <button className={props.styleWithProps}>{props.text}</button>
        </>
    )
}

export default Button;