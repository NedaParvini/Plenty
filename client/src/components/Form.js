//import { typeDefs } from "../../../server/schemas/typeDefs";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { useState } from "react";
import '@progress/kendo-theme-default/dist/all.css'; 
import MultiSelect from 'multiselect-react-dropdown';

import React, { useEffect } from "react";
// //import { ComboBox } from "@progress/kendo-react-dropdowns";
// import { MultiSelect } from "@progress/kendo-react-dropdowns";
// import { useState } from "react";
// import '@progress/kendo-theme-default/dist/all.css';

function Form() {
  
  const assignees = [
    {
      id: 1,
      name: "Meat",
      occupation: "Beef",
    },
    {
      id: 2,
      name: "Meat",
      occupation: "Chicken",
    },
    {
      id: 3,
      name: "vegetable",
      occupation: "Tomato",
    },
    {
      id: 4,
      name: "Spices",
      occupation: "Salt",
    },
    {
      id: 5,
      name: "Spices",
      occupation: "Pepper",
    },
    {
      id: 6,
      name: "Spices",
      occupation: "Ginger Powder",
    },
  ];
  const [ingredients, setIngredients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const onIngredientChange = event => setSelectedIngredients([...event.value])
  const [selectedAssignee, setSelectedAssignee] = useState(null);
  const onChange = event => setSelectedAssignee(event.value);
  //added here
  useEffect(() => {
    const ingredients = "https://www.themealdb.com/api/json/v2/9973533/list.php?i=list";
   
    const fetchData = async () => {
      try {
        const response = await fetch(ingredients);
        const json = await response.json();
        setIngredients(json.meals);
        console.log(json.meals);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);
const handleChange = event => setSearchTerm(event.target.value)

    // api to call ingredients
 
    // set ingredients to api results
 // DO NOT DELETE THE EMPTY ARRAY!!!! LEAVE IT THERE!!!!!!!!!!
  // const ingredients = ['chicken', 'fish', 'pork']
  
  
  // on submit function/ take selected ingredients and send it to our other api, then render results.
  return (
    <div className="form">
      <div className="container">
        <h1 >Search</h1>
        <form >
      <label className="k-label k-mb-3">Choose your ingredients</label>
{<MultiSelect data={ingredients} value={selectedIngredients} onChange={handleChange} autoClose = {false} />}
 
    </form>
      </div>
    </div>
  );
}
export default Form;












  

// function Form() {
//   const assignees = [
//     {
//       id: 1,
//       name: "Meat",
//       occupation: "Beef",
//     },
//     {
//       id: 2,
//       name: "Meat",
//       occupation: "Chicken",
//     },
//     {
//       id: 3,
//       name: "vegetable",
//       occupation: "Tomato",
//     },
//     {
//       id: 4,
//       name: "Spices",
//       occupation: "Salt",
//     },
//     {
//       id: 5,
//       name: "Spices",
//       occupation: "Pepper",
//     },
//     {
//       id: 6,
//       name: "Spices",
//       occupation: "Ginger Powder",
//     },
//   ];
//   const [selectedAssignee, setSelectedAssignee] = useState(null);
//   const onChange = event => setSelectedAssignee(event.value);
//   return (
//     <div class="form">
//       <div class="container">
//         <h1 >Form</h1>
//         <form >
//       <label className="k-label k-mb-3">Choose your ingredients</label>
//       <ComboBox
//         data={assignees}
//         value={selectedAssignee}
//         onChange={onChange}
//         textField="name"
//         groupField="occupation"
//         suggest
//       />
//     </form>
//       </div>
//     </div>
//   );
// }

