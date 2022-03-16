import React from "react";
import { ComboBox } from "@progress/kendo-react-dropdowns";
import { useState } from "react";
import '@progress/kendo-theme-default/dist/all.css'; 

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
  const [selectedAssignee, setSelectedAssignee] = useState(null);
  const onChange = event => setSelectedAssignee(event.value);
  return (
    <div class="form">
      <div class="container">
        <h1 >Form</h1>
        <form >
      <label className="k-label k-mb-3">Choose your ingredients</label>
      <ComboBox
        data={assignees}
        value={selectedAssignee}
        onChange={onChange}
        textField="name"
        groupField="occupation"
        suggest
      />
    </form>
      </div>
    </div>
  );
}

export default Form;