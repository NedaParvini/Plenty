import React from "react";
import '@progress/kendo-theme-default/dist/all.css';
import { Card, Button, ListGroupItem, ListGroup } from 'react-bootstrap';
import { FaHandHoldingHeart } from 'react-icons/fa';

function Col(props) {
    console.log(props);

    return (

        <Col>
            <Card sm='6'>
                <Card.Img variant="top" src={`${props.meals.strMealThumb}`} />
                <Card.Title onClick={
                    () => {
                        console.log('here is meal id: ', props.meals.idMeal)
                        fetch(`https://www.themealdb.com/api/json/v2/1/lookup.php?i=${props.meals.idMeal}`)
                            .then(response => {
                                return response.json()
                            })
                            .then(recipes => {
                                console.log(recipes)
                            })
                    }
                }>{props.meals.strMeal}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Nationality: {props.meals.strArea} </ListGroupItem>
                    <ListGroupItem>Cuisine: {props.meals.strCategory}</ListGroupItem>
                </ListGroup>
                <Button id={`${props.meals.idMeal}`} variant="primary">Favorite <FaHandHoldingHeart /></Button>
            </Card>
        </Col>

    );
}

export default Col;
