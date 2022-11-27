import React from "react";


function Buttons () {
   return (
      <div className="buttons-list">
         <div className="button-item">Для начинающих</div>
         <div className="button-item">От билдеров</div>
         <div className="button-item">Для профессионалов</div>
         <div className="button-item">Расходники</div>
      </div>
   )
};

export default Buttons


// function Buttons (props) {
//    return (
//       <div className="buttons-list">
//          <div className="button-item">{props.dataButtons.name}</div>
//       </div>
//    )
// };
