import React, { useEffect } from "react";
//import { ComboBox } from "@progress/kendo-react-dropdowns";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { useState } from "react";
import '@progress/kendo-theme-default/dist/all.css';
import { Card, Container, Button, ListGroupItem, ListGroup, Row,Col } from 'react-bootstrap';

function Form() {
  //added here

  useEffect(() => {
    // api to call ingredients
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then(response => response.json())
      .then(norm => {
        const ingredientsName = norm.meals.map(ing => ing.strIngredient)
        setIngredients(ingredientsName)
      })
      .catch(error => {
        console.log(error)
      })
  }, []) // DO NOT DELETE THE EMPTY ARRAY!!!! LEAVE IT THERE!!!!!!!!!!
  const [ingredients, setIngredients] = useState([])
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const onIngredientChange = event => setSelectedIngredients([...event.value])
  const [selectedAssignee, setSelectedAssignee] = useState(null);
  const onChange = event => setSelectedAssignee(event.value);
  const [meals, setMeals] = useState([])
  const [style,setStyle] = useState({display: 'none'});
  const [style1,setStyle1] = useState({display: 'block'});

  // on submit function/ take selected ingredients and send it to our other api, then render results.

  return (
    <div className="form">
      <div className="container">
        <h1>Form</h1>
        {/* HERE IS THE CALL BACK FROM THE SELECTED LIST AND RECIPE RESULTS */}
        <form onSubmit={e => e.preventDefault()}>
          <label className="k-label k-mb-3">Choose your ingredients</label>
          <MultiSelect data={ingredients} value={selectedIngredients} onChange={onIngredientChange} autoClose={false}></MultiSelect>
          {console.log(selectedIngredients)}
          <button type="submit" onClick={() => fetch(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${selectedIngredients.join(',')}`)
            .then(console.log(`https://www.themealdb.com/api/json/v2/1/filter.php?i=${selectedIngredients.join(',')}`))
            .then(response => response.json())
            .then(recipes => {
              console.log(recipes)
              if(recipes!==null){
                setMeals(recipes.meals)
              }
            })
          }
          >Submit</button>
          
          <Container>
            {meals !== null && meals.length > 0 ?
                <Row xs={1} md={2} className="g-2">
                    {(meals).map((meal) => (
                    <Col>
                    <Card sm='4' style={style1}>
                      <Card.Img variant="top" src={`${meal.strMealThumb}`} />
                      <Card.Title>{meal.strMeal}</Card.Title>
                     <Card.Body>
                      <Card.Text onClick={
                          () => {
                            { fetch(`https://www.themealdb.com/api/json/v2/1/lookup.php?i=${meal.idMeal}`)
                              .then(response => {
                                return response.json()
                              })
                              .then(recipes => {
                                console.log(recipes)
                                setMeals(recipes.meal)
                              })
                              console.log('here is meal id: ', meal.idMeal)
                              setStyle({display: 'block'});
                              setStyle1({display: 'none'});
                          }
                          }
                        }></Card.Text>
                    </Card.Body>
                      <Button id={`${meal.idMeal}`} variant="primary">Favorite </Button>
                    </Card>

                    <Card sm='4' style={style}>
                      <Card.Img variant="top" src={`${meal.strMealThumb}`} />
                        <Card.Title>{meal.strMeal}</Card.Title>
                      <Card.Body>
                        <Card.Text >YES</Card.Text>
                      </Card.Body>
                    </Card>
                    </Col>
                  )) }
                </Row>
                : selectedIngredients.length!==0 ? <div> There are no Available recepies with this ingredients...</div> : <div></div>
                }
    
        </Container>
        </form>
      </div>
    </div>
  );
}

export default Form;


// <ListGroup className="list-group-flush">
//<ListGroupItem>Nationality: {meal.strArea} </ListGroupItem>
//<ListGroupItem>Cuisine: {meal.strCategory}</ListGroupItem>
//</ListGroup>
