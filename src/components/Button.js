import React from "react";

function Button (props) {
   return (
      <div className="button-item">{props.button.name}</div>
   )
};


export default Button




// function Button () {
//    return (
//       <div className="buttons-list">
//          <div className="button-item">Для начинающих</div>
//          <div className="button-item">От билдеров</div>
//          <div className="button-item">Для профессионалов</div>
//          <div className="button-item">Расходники</div>
//       </div>
//    )
// };
