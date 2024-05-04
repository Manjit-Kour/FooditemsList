import styles from "./List.module.css";
import { useState } from "react";
const FList=({items})=>{
    let [activeitems , setActive] = useState([]);


  const Buybutton=(item)=>{
    let newitems=[...activeitems, item];
    setActive(newitems);
  }
  

    return(
        <ul className="list-group">
            {items.map((item)=>{
             return (
             <li className={`${activeitems.includes(item) && 'active'} list-group-item`} key={item}>{item}
             <button className={`${styles.buttonstyle}  btn btn-primary`} onClick={()=>Buybutton(item)}>BUY</button>
             </li>
             )
            })}
        </ul>
    )
}
export default FList;