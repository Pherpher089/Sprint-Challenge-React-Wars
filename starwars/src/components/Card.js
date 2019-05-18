import React from 'react';
import './StarWars.css';

const Card = props => {
    return(
        <div className="card">
            <h1>{props.name}</h1>
        </div>
    )
}

export default Card;