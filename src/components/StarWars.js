import React, { useEffect, useState } from "react";
import { ListGroup, Spinner } from 'react-bootstrap';

export const StarWars = () => {

    const [ list, setList ] = useState([])

    const renderList = list.map((item, index) => <ListGroup.Item style={{background: item.eye_color}} key={index}>{item.name}</ListGroup.Item>)
    const getStarWarsAPI = () => {
        const URL = 'https://swapi.dev/api/'
        const people = 'people/'
        fetch(`${URL}${people}`)
            .then(respone => respone.json())
            .then(result => setList(result.results))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getStarWarsAPI()
    },[])

    return (
        <ListGroup>
            {(list.length > 0) ? renderList : <Spinner data-testid="custom-element" />}
        </ListGroup>
    )
}
