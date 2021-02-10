import React from 'react';
import './Card.scss';

function Card(props) {
    return (
        <div key={props.index} className="card">
            <h1>Name:{props.name}</h1>
            <h2>height:{props.height}</h2>
        </div>
    );
}

export default Card;