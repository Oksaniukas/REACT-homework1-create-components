import React, { useState } from "react";

function CardOfProduct(props) {
   // let abc = () => {
   //    console.log('you have click')
   // onClick={abc}

   /***BUTTON-IN-CART********************************************* */
   let [number, setNumber] = useState(5)
   let changeNumber = () => {
      // setNumber(number+10)
      setNumber(prev => prev+5)
   }

   //***HEARTS ********************************************************/
   let [heart, setHeart] = useState(props.datacard.isLiked)
   
   // let heartClass = heart ? 'favourite red' : 'favourite'
   let heartClass = heart ? './assets/images/like2.svg' : ' ./assets/images/like.svg' 

   let changeFavourite = () => {
      setHeart(prev => !prev)
   }

/*COUNT-PLUS-MINUS ************************************************************ */
let [number1, setNumber1] = useState(0)
   let changeNumberPlus = () => {
      setNumber1(prev => prev+1)
   }
   let changeNumberMinus = () => {
      setNumber1(prev => {
         if (prev ===0) return 0  /****до 0 и стоп */
         return prev-1
      })
   }
/*************************** */
   return(
      <div className="card">
         {number}
         {heart}
         <img src={props.datacard.img} alt='cardimage' />
         <div className="text-block">
            <h3>{props.datacard.title}</h3>
            <div className="text-price">{props.datacard.price} €</div>
            <div className="button-in-cart" onClick={changeNumber}>  
               Добавить в корзину
            </div>
         </div>
         <div className='favourite' >
            <img className="favourite-icon" src={heartClass} alt="like" 
            onClick={changeFavourite}/>
         </div>
         <div className="count-block">
            <div className="count-button minus" onClick={changeNumberMinus}>-</div>
            <div className="count-block-text-block">
               <div className="count-block-text1">{number1}</div>
               <p className="count-block-text2">В корзине</p>
            </div>
            <div className="count-button plus" onClick={changeNumberPlus}>+</div>
         </div>
      </div>
   )
}

export default CardOfProduct