import React from 'react';
import './Character.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVoteYea } from '@fortawesome/free-solid-svg-icons';

const Character = (props) => {
    const { name, sitcom, age, rating, budget } = props.character;
    return (
        <div className="col bg-info">
            <h3>{name}</h3>
            <h3>{sitcom}</h3>
            <h3>{age}</h3>
            <h3>{rating}</h3>
            <h3>$ {budget}</h3>
            <button onClick={() => { props.handleVote(props.character) }}>
                <FontAwesomeIcon icon={faVoteYea}></FontAwesomeIcon> Vote
            </button>
        </div>
    );
};

export default Character;