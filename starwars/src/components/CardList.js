import React from 'react';
import './StarWars.css'
import Card from './Card.js'

const CardList = props =>{
    return(
        <div>
        {props.starwarsChars.map(card =>(
            <Card 
                birth-year={card.birth_year}
                created={card.created}
                edited={card.edited}
                eye-color={card.eye_color}
                films={card.films}
                gender={card.male}
                hair-color={card.hair_color}
                height={card.height}
                homeworld={card.homeworld}
                mass={card.mass}
                name={card.name}
                skin-color={card.skin_color}
                species={card.species}
                starships={card.starships}
                url={card.url}
                vehicles={card.vehicles}/>
            ))}
        </div>
    );
}

export default CardList;