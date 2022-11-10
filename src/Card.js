import React from "react"


export default function Card(props){
    const style1 = {backgroundImage:''} 
    const style2 ={backgroundImage: `url("images/${props.url}.jpg")`}
    
    return(
        <div className="card"
         style={props.isClicked === true ? style2 : style1}
          onClick={props.flipCard}
          ></div>
    )
}