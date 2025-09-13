import React, { useEffect, useState } from "react";
import Increment from "./IncrementTest";






const body = {
    color: "white",
    height: "100vh",
    width: "100%",
    // border: "10px solid red",
    background: "#323232",
    display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

}

const divStyle = {
    display: "flex",
    flexWrap: "wrap",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}


const btnStyle = {
    paddingInline: "20px",
    paddingBlock: "15px",
    fontSize: "20px",
    background: "blue",
    color: "white",
    border: "1px solid white",
    marginInline: "30px",
    cursor: "pointer",
}
const chatStyle = {
    width: '100%', textAlign: "center", fontSize: "40px", marginBottom: "40px"
}











const UseEffect = () => {

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     alert("Some thing change......")
    // })       //this will run for every change 

    useEffect(() => {
        // alert("Window recoded.......")
    }, [])     //this will run only when the window is open first time or recoded 

    useEffect(() => {
        document.title = `chat : ${count}`;
    }, [count]);  // for changing the viable count this useEffect is change 



    return (
        <>
            <div style={body}>
                <div style={divStyle}>
                    <h1 style={chatStyle}>Chat : {count}</h1>
                    <button style={btnStyle} onClick={() => {
                        setCount(count + 1)
                    }}>
                        INCR
                    </button>
                    <button style={btnStyle} onClick={() => {
                        count == 0 ? setCount(0) : setCount(count - 1)
                    }}>
                        DECR
                    </button>
                </div>
            </div>
        </>
    )
}

export default UseEffect;