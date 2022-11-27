import React from "react";
import Buttons from "./Buttons";
import dataCards from "../datacards";
// import dataButtons from "../databuttons";
import CardOfProduct from "./ProductCards";

function Main() {
   let listOfCards = dataCards.map(card => {
      return <CardOfProduct datacards={card} />
   })
   return (
      <div>
         <h1> Тату машинки</h1>
         <Buttons />
         <div className="card-wrapper">
            {listOfCards}
         </div>

      </div>
   
   )
}


export default Main



// function Main() {
//    let listOfCards = dataCards.map(card => {
//       return <CardOfProduct datacards={card} />
//    })
//    let listOfButtons = dataButtons.map(buttons => {
//       return <Buttons databuttons={buttons} />
//    })

//    return (
//       <div>
//          <h1> Тату машинки</h1>
//          <div className="button-wrapper">
//             {listOfButtons}
//          </div>

//          <div className="card-wrapper">
//             {listOfCards}
//          </div>

//       </div>
   
//    )
// }

