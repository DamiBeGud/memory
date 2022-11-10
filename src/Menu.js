import React from 'react'

export default function Menu(props){
    const[colorEasy, setColorEasy] = React.useState(false)
    const[colorMedium, setColorMedium] = React.useState(false)
    const[colorHard, setColorHard] = React.useState(false)
    
    function changeColorEasy(){
        setColorEasy(prevColor=> !prevColor)
        setColorMedium(prevColor=> false)
        setColorHard(prevColor=> false)

    }
    const styleEasy = {color: colorEasy? 'red' : ''}
    function changeColorMedium(){
        setColorEasy(prevColor => false)
        setColorMedium(prevColor=> !prevColor)
        setColorHard(prevColor => false)
    }
    const styleMedium= {color: colorMedium? 'red' : ''}
    function changeColorHard(){
        setColorEasy(prevColor => false)
        setColorMedium(prevColor=> false)
        setColorHard(prevColor=> !prevColor)
    }
    const styleHard = {color: colorHard? 'red' : ''}
    
    return(
        
        <div className='menu-conteiner'>
            <h1 className='menu--header'>Memory Game</h1>
            <div className='select-difficulty--wrapper'>
            <fieldset className='select-difficulty'>
                <legend>Select difficulty</legend>
                <input 
                    type="radio"
                    id="easy"
                    name="difficulty"
                    value="6"
                    colums='2'
                    onChange={props.changeDifficulty}
                    onClick={changeColorEasy}
                />
                <label className='input-lable' style={styleEasy} htmlFor="easy">Easy</label>
                <br />
                
                <input 
                    type="radio"
                    id="medium"
                    name="difficulty"
                    value="12"
                    colums='3'
                    onChange={props.changeDifficulty}
                    onClick={changeColorMedium}
                />
                <label  className='input-lable' style={styleMedium} htmlFor="medium">Medium</label>
                <br />
                
                <input 
                    type="radio"
                    id="hard"
                    name="difficulty"
                    value="20"
                    colums='4'
                    onChange={props.changeDifficulty}
                    onClick={changeColorHard}
                />
                <label className='input-lable' style={styleHard} htmlFor="hard">Hard</label>
                </fieldset>
                </div>  
                
                <button onClick={props.startGame} className="button">Start Game</button>
        </div>
    )
}