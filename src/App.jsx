 

import { useState } from "react";

//  function App(){
//     // variable
//     // let color="Red";
//     const [color, setColor]=useState('red')

//     const changecolor=()=>{
//          setColor('Blue');
        
        
//     }
//     return(
//         <>
//         <h1>My favourite color is {color}</h1>
//         <button onClick={changecolor}>Blue</button>
//         </>
//     )
//  }

//  export default App;

function App(){

    const[counter,setCounter]=useState(0);
    const incrementCounter=()=>{
        setCounter(counter=>counter+1);
        setCounter(counter=>counter+1);
        setCounter(counter=>counter+1);



    }
    return(
    <>
    <h1>count :{counter}  </h1>
    <button onClick={incrementCounter}> Click</button>
    </>)
}

export default App;


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