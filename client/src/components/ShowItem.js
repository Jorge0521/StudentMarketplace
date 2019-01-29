import React from 'react';

const ShowItem = props => (
    <div className="item">
        <h2>{props.name}</h2>
        <h2>{props.price}</h2>
        <h2>{props.photo}</h2>
    </div>

);

export default ShowItem

