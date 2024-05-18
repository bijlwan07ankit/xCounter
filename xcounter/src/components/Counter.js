import react from "react";
import {useState} from 'react';
import Styles from "../components/Counter.module.css"

export default function Counter(){
    const [count,setCount]=useState(0);
    const add=(()=>{
        setCount((count)=>count+1)
    })

    const sub=(()=>{
        setCount((count)=> count-1)
})
    return(
        <div className={Styles.app}>
        <h1>Counter App</h1>
        <p>Count:{count}</p>
       
       <button
       onClick={add}
       >Increment</button>
        <button onClick={sub}
        >Decrement</button>
    </div>

    )
}
