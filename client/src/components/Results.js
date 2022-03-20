import React from 'react';
import { Name } from "./Form";


function Results(props) {
    var{
        recipes
    }=props; 
    
    console.log("again"+recipes);

  return (
    <Name.Consumer>
    {(fname) => {
      return <h1>My Name is {fname}</h1>;
    }}
  </Name.Consumer>
  );
}

export default Results;


