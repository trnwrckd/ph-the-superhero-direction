import React from 'react';
import './Votes.css';

const Votes = (props) => {
    let totalCost = 0;

    // compute total cost
    for (const character of props.characterList) {
        totalCost += character.budget;
    }

    return (
        <div className="votes">
            <h2 className="border-bottom border-dark border-5 pb-2">Votes</h2>
            <div className="px-3 pb-3">
                <div className="fs-4">
                    <p className="m-0">Votes Given : {props.characterList.length}</p>
                    <p>Total Cost : ${totalCost}</p>
                </div>
                <div className="row row-cols-2 g-2">
                    {
                        props.characterList.map(character =>
                            <div className="col" key={character.id}><p className="name-card">{character.name}</p></div>
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default Votes;