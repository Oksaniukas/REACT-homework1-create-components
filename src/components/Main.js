import React from "react";
import Button from "./Button";
import dataCard from "../datacard";
import dataButton from "../databutton";
import CardOfProduct from "./ProductCards";

function Main() {
   let listOfCards = dataCard.map((card, idx) => {
      return <CardOfProduct key={idx} datacard={card} />
   })
   let listOfButtons = dataButton.map((button) => {
      return ( 
      <Button key={button.uid} button={button} />
      )
   })

   return (
      <div>
         <h1> Тату машинки</h1>
         <div className="buttons-list">
            {listOfButtons}
         </div>
         <div className="card-wrapper">
            {listOfCards}
         </div>
      </div>
   )
}

export default Main




// function Main() {
//    let listOfCards = dataCard.map(card => {
//       return <CardOfProduct datacard={card} />
//    })

//    let listOfButtons = dataButtons.map(buttons => {
//       return <Buttons databuttons={buttons} />
//    })

//    return (
//       <div>
//          <h1> Тату машинки</h1>
//          <Buttons />
//          <div className="card-wrapper">
//             {listOfCards}
//          </div>

//       </div>
   
//    )
// }
