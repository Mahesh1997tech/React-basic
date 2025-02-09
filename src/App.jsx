 

// import { useState } from "react";

// //  function App(){
// //     // variable
// //     // let color="Red";
// //     const [color, setColor]=useState('red')

// //     const changecolor=()=>{
// //          setColor('Blue');
        
        
// //     }
// //     return(
// //         <>
// //         <h1>My favourite color is {color}</h1>
// //         <button onClick={changecolor}>Blue</button>
// //         </>
// //     )
// //  }

// //  export default App;

// function App(){

//     const[counter,setCounter]=useState(0);
//     const incrementCounter=()=>{
//         setCounter(counter=>counter+1);
//         setCounter(counter=>counter+1);
//         setCounter(counter=>counter+1);



//     }
//     return(
//     <>
//     <h1>count :{counter}  </h1>
//     <button onClick={incrementCounter}> Click</button>
//     </>)
// }

// export default App;


// function App(){

//     const[car,setCar]=useState({
//     brand:"Ferrari",
//     model:"Roma",
//     year:"2023",
//     color:"red"
//     })

//     const changeColor=()=>{
//         setCar((prev)=>{
//             return {...prev, color:"blue"}
//         })
//     }
//     return(
//         <>
//         <h1>My {car.brand}</h1>
//         <h2>It is a {car.color} {car.model} from {car.year}</h2>
//         <button onClick={changeColor}>Blue</button>
//         </>
//     ) 
// }
// export default App;
// import React,{useEffect, useState} from "react";


// function App(){
//     const [count ,setCount]=useState(0)
// // this use use effect without any dependency
//     useEffect(()=>{
//         setTimeout(()=>{
// setCount(count =>count+1);
 
//         },2000)
//     },[count])//[] dependency
//     return(
//         <>

// <h1> I ve rendered {count} times</h1>
//         </>
//     )
// }
// export default App;
//  import React,{useEffect,useState,useRef} from "react";

//  function App(){

//     const[value,setValue]=useState(0);
//     // const[count,setCount]=useState(0);
//    const count=useRef(0);//we dont want to re render the component


//    //use effect with dependency
// useEffect(()=>{
//     count.current=count.current+1;
// });

//     return(
//         <>
//         <button onClick={()=>{setValue(prev =>prev-1)}}>-1</button>
//         <h1>{value}</h1>
//         <button onClick={()=>{setValue(prev =>prev+1)}}>+1</button>
//         <h1>Render Count:{count.current}</h1>
//         </>
//     )



//  }
//  export default App;

import react, { useRef } from "react";

function App(){
    //this is used to access the dom element

    const inputElem=useRef();

    const btnCliked=(()=>{
        inputElem.current.style.background="red";
    })
    return(
        <>
        <input type="text" ref={inputElem} />
        <button onClick={btnCliked}>Click Here</button>
        </>
    )
}

export default App; 