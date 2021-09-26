import React from 'react';
import './Votes.css';

const Votes = (props) => {
    let totalCost = 0;

    for (const character of props.characterList) {
        totalCost += character.budget;
    }
    // console.log(props.characterList);
    return (
        <div className="votes">
            <h2 className="border-bottom border-dark border-5 pb-2">Votes</h2>
            <p>Votes Given : {props.characterList.length}</p>
            <p>Total Cost: ${totalCost}</p>
            {
                props.characterList.map(character => <h5 key={character.id}>{character.name}</h5>)
            }
        </div>
    );
};

export default Votes;