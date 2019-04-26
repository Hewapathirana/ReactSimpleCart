import React, { Component } from 'react';


const  person=(props)=>{
  return(
      <div>
          <p>Person component my name is {props.name} and age is {props.age} years</p><p>{props.children }</p>
      </div>
  )
};

export default person;
