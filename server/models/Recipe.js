//const { Schema, model } = require('mongoose');
import React, { Component } from 'react';
import './App.css';
console.log(process.env.REACT_APP_API_KEY)
class App extends Component {}


let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Ingredient';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'www.themealdb.com/api/json/v1/1/list.php?i=list';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  option.value = data[i].abbreviation;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });