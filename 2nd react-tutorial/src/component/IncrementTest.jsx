//                  ⭐  Advantage of useState  ⭐



import React from 'react';
import { useEffect, useState } from 'react';

const body = {
    color: "white",
    height: "100vh",
    width: "100%",
    // border: "10px solid red",
    background: "#323232",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

}

const btnStyle = {
    fontSize: "60px",
    background: "none",
    color: "white",
    border: "0px solid red",
    marginInline: "30px"
}


const Increment = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={body}>
            <h1>Count : {count}</h1><br />
            <div>
                <button onClick={() => { setCount(count + 1) }} style={btnStyle}>+</button>
                <button onClick={() => {
                    if (count > 0)
                        setCount(count - 1);
                    else
                        setCount(0)
                }} style={btnStyle}>-</button>

            </div>
        </div>
    )
}

export default Increment;




//                  ⭐  Advantage of useState :

/* in normal react code <div>{count}</div>     
            if we change count variable then that will not render this <div> again for this reason pervious value of count is 
                displayed. mean the change on count variable not rerender the code where count variable id use.

For this problem useState is use : 
const [count, setCount] = useState(4);    => where count = 4
    
<div>A: {count}</div>  this is so tho the user 'A: 4'

now if we change the value of setCount = count + 20  like : <button onClick={() => { setCount(count + 1) }}>+</button>
                                                            =>  steCount = 24  =>  count = 24
now the value of count variable is change then this will rerender this <div>A: {count}</div>


*/


