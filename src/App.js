
import './App.css';
import FList from "./List";
import 'bootstrap/dist/css/bootstrap.css';
import Container from './Container';
import Foodinput from './FoodInput';
import { useState } from 'react';
import Errormsg from './Errormsg';
function App() {
  let [fooditems,setFooditems]=useState([]);

  const handlenewitem=(event)=>{
    if(event.key==="Enter"){
      fooditems=[...fooditems,event.target.value]
      event.target.value='';
      setFooditems(fooditems);
    }
  }

  return (
    <Container>
    <h1>Healthy Foods</h1>
    <Foodinput addnewitem={(event)=>handlenewitem(event)}></Foodinput>
    <Errormsg fooditems={fooditems}></Errormsg>
    <FList items={fooditems}></FList>
    </Container>
  );
}

export default App;
