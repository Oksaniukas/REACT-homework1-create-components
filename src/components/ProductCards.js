import React from "react";

function CardOfProduct(props) {
   console.log(props)
   return(
      <div className="card">
         <img src={props.datacards.img} alt='cardimage' />
         <div className="text-block">
            <h3>{props.datacards.title}</h3>
            <div className="text-price">{props.datacards.price} €</div>
            <div className="button-in-cart">
               Добавить в корзину
            </div>
         </div>
         <div className="favorite">
            <img className="favorite-icon" src="./assets/images/like.svg" alt="like"/>
         </div>
      </div>
   )
}

export default CardOfProduct