import React from 'react'
import Menu from './Menu'
import Card from './Card'
import { nanoid } from 'nanoid'

export default function App(){

const[difficulty, setDifficulty] = React.useState()
const[cards, setCards] = React.useState()
const[memory, setMemory] = React.useState(false)
let [z, setZ] = React.useState(0);

///////////Updates cards when difficulty is changed
React.useEffect(()=>{
    setCards(createCards)
    console.log(cards)
}, [difficulty])

function random(){
    return Math.ceil(Math.random() * difficulty)
}

//*****    Randomly create cards 
function createCards(){
    const newCards = []
    const positions = []
    
    while(positions.length < difficulty){
        let randomNum = random()
        let url = Math.ceil(randomNum / 2)
        if(positions.includes(randomNum)){

        }else{
 
            positions.push(randomNum)
            newCards.push({id:nanoid(),
                url: url,
                isClicked: false,
                matches: false})     
        }
    }
    return newCards
}
// Changes difficulty
function changeDifficulty(event){
    setDifficulty(event.target.value)
     
}
function startGame(){
    setMemory(true)
}
function goToMenu(){
    setMemory(false)
} 

React.useEffect(()=>{
    if(z===2){
        
        const twoCards = cards.filter(card=> card.isClicked)
        if(twoCards[0].url === twoCards[1].url){
            setCards(updateMatch =>  updateMatch.map(card=>{
                return card.isClicked? {...card, matches: !card.matches}:
                card
            }))
            setTimeout(() => {
                setCards(removeMatch => removeMatch.filter(card=> card.matches === false))
              }, 500);
        }else{
            setTimeout(() => {
                setCards(flipBack =>  flipBack.map(card=>{
                    return card.isClicked? {...card, isClicked: !card.isClicked}:
                    card
                }))
              }, 300);
        }
        setZ(0)
        
    }
    
},[z])
//Create Cards
function flipCard(id){
    setCards(oldCards => oldCards.map(card => {
        return card.id === id ? 
        {...card, isClicked: !card.isClicked} :
        card
    }))
    setZ(prevz=> prevz + 1)
}

     const createGame = cards?.map(card=>(
        <Card 
        key={card.id}
        url={card.url}
        isClicked={card.isClicked}
        matches={card.matches}
        flipCard={() => flipCard(card.id)}
        />
    ))
        return(
        <main>
        {           
            memory === false?
            <Menu 
            changeDifficulty={changeDifficulty}
            startGame={startGame}
            />:
            <section className='gameConteiner'>
                <div className='cardsConteiner' >
                {createGame}
                </div>
                <button className='button' onClick={goToMenu}>Menu</button>
            </section>
        }
        </main>
    )
}


