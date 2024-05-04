import styles from "./Foodinput.module.css"
const Foodinput=({addnewitem})=>{
    return (
        <input type="text" placeholder="Enter Food item here" className={styles.inputstyle} onKeyDown={addnewitem} ></input>
    )
}
export default Foodinput;