import React from 'react';
import './StarWars.css'
import Card from './Card.js'

const CardList = props =>{
    return(
        <div className='card-list'>
        {props.starwarsChars.map(card =>(
            <Card 
                birthYear={card.birth_year}
                created={card.created}
                edited={card.edited}
                eyeColor={card.eye_color}
                films={card.films}
                gender={card.gender}
                hairColor={card.hair_color}
                height={card.height}
                homeworld={card.homeworld}
                mass={card.mass}
                name={card.name}
                skinColor={card.skin_color}
                species={card.species}
                starships={card.starships}
                url={card.url}
                vehicles={card.vehicles}/>
            ))}
        </div>
    );
}

export default CardList;