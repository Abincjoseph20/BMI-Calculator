import React from "react";
import { useState } from "react";
import './index.css'; // Correct path if `index.jsx` is inside `src/assets/componets/`





function BMI(){


    const [height,setHeight] = useState('');
    const [weight,setWeight] = useState('');
    const [bmi,CalauteBmi] = useState('');

    const Target1 = (evt1)=>{
        setHeight(evt1.target.value)
    }

    const Target2 = (evt2)=>{
        setWeight(evt2.target.value);
    }


    const HandleChange=()=>{
        const newValue = weight/(height*height);
        CalauteBmi(newValue.toFixed(2));  //if is outpu  like this=> 24.5897458697 .toFixed(2) convert like this => 24.59 
        console.log(newValue);


    }

    let bmiCategory = ''

    const Catogory =(bmi)=>{
        const numValue = parseFloat(bmi);
        if(numValue < 18.5){
            bmiCategory = 'you are under weight'
            return bmiCategory ;
        }else if(numValue >= 18.5 && numValue< 24.9){
            bmiCategory = "You are Normalweight"
            return bmiCategory;
        }else if(numValue >= 25 && numValue < 29.9){
            bmiCategory = "You are Overweight"
            return bmiCategory
        }


        return bmiCategory
    }
    Catogory(bmi);



    const CleareAll=()=>{
        setHeight('');
        setWeight('');
        CalauteBmi('');
    }



    return (
        <div className="divMain">
      <div className="form-container">
        <input className="input1" type="text" value={height} onChange={Target1} placeholder="Height (m)" />
        <br />
        <br />
        <input className="input2" type="text" value={weight} onChange={Target2} placeholder="Weight (kg)" />
        <br />
        <br />
        <button className="btn1" onClick={HandleChange}>Click me</button>
        <div className="div2">
          <h1>{bmi}</h1>
          <h3>{bmiCategory}</h3>
        </div>
        <button className="btn2" onClick={CleareAll}>Clear all</button>
      </div>
    </div>
    );
}
export default BMI;