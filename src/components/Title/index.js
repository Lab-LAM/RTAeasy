import React from "react";
import './title.css'

const Title = (props)=>{
    return(
        <div className="titulo">
            <h3 className="texto">{props.title}</h3>
        </div>
    )
}

export default Title;