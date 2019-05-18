import React from 'react';
import './StarWars.css';

const Card = props => {
    return(
        <div className="card">
            <div className='card-header'>
                <h1>{props.name}</h1>
            </div>
            <div>
                <div className='card-basic-info'>
                    <div>
                        <p>DOB: {props.birthYear}</p>
                        <p>Gender: {props.gender}</p>
                        <p>Heght: {props.height}</p>
                        <p>Mass: {props.mass}</p>
                    </div>
                    <div>
                        <p>Eye Color: {props.eyeColor}</p>
                        <p>Hair Color: {props.hairColor}</p>
                        <p>Skin Color: {props.skinColor}</p>
                    </div>           
                </div>
            </div>
        </div>
    )
}

export default Card;