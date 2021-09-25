import React from 'react';
import './Votes.css';

const Votes = (props) => {
    let totalCost = 0;
    console.log(props.characterList);
    for (const character of props.characterList) {
        totalCost += character.budget;
    }
    console.log(totalCost);
    return (
        <div>
            <h2>Votes</h2>
            <p>Votes Given : {props.characterList.length}</p>
            <p>Total Cost: ${totalCost}</p>
            {
                props.characterList.map(character => <h5>{character.name}</h5>)
            }
        </div>
    );
};

export default Votes;