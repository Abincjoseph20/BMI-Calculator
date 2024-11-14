import React from "react";
import { useState } from "react";



function BMI(){


    const [height,setHeight] = useState('');
    const [weight,setWeight] = useState('');
    const [value,CalauteBmi] = useState('');

    const Target1 = (evt1)=>{
        setHeight(evt1.target.value)
    }

    const Target2 = (evt2)=>{
        setWeight(evt2.target.value);
    }


    const HandleChange=()=>{
        const newValue = weight/(height*height);
        CalauteBmi(newValue);
        console.log(newValue);

    }

    return <div>
        <input type="text" value={height} onChange={Target1}/>
        <br/>
        <br/>
        <input type="text" value={weight} onChange={Target2}/>
        <br/>
        <br/>
        <button onClick={HandleChange}>Clcik me</button>
        <div>
            <h1>{value}</h1>
        </div>
    </div>

}
export default BMI;