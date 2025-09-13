import React from 'react'

const App = () => {  // this is called component return to main.jsx
  return (
    <div>
      <Header />    {/* This is an nested component */}
      <h1>Hello world {2024+1} year</h1>
    </div> //we can,t write any other element out side the <div></div>
  ) // we mast return one element from a component like, <></>, <div></div>, etc..
}

export default App;   // if we have multiple component the we can export like : export {App, Header, Footer};

// in jsx we must close tags like : <img src="" />
// inside {} this we can write script in side jsx html like: <h1>Hello world {2024+1}</h1> 


/// style using variable
const bgHeader = {
  background: "gray",
  marginBottom: '10px',
  padding: "5px"
}

/// nested component support in jsx: 
const Header = () => { // we can use it an App <Header/>
  return(
    <>
      <center style={bgHeader}>
        <h3 style={{color: "white"}}>This is header</h3>  {/* we can give style tags in jsx like this way :  */}
      </center>
    </>
  );
};

