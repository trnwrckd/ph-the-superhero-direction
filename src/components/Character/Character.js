import React from 'react';
import './Character.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPoll } from '@fortawesome/free-solid-svg-icons';

const Character = (props) => {
    const { name, sitcom, age, rating, budget, image } = props.character;
    return (
        <div className="single-character">
            <div><img class="char-image" src={image} alt="" /></div>
            <p class="sitcom-title">{sitcom}</p>
            <div class="d-flex justify-content-end pe-3">
                <div>
                    <p> Age - {age}</p>
                    <p>Rating - {rating}</p>
                    <p>${budget}</p>
                </div>
            </div>
            <h2>{name}</h2>
            <div className="d-flex justify-content-end pe-3">
                <button className="custom-btn" onClick={() => { props.handleVote(props.character) }}>
                    <span className="text-danger fs-5"><FontAwesomeIcon icon={faPoll}></FontAwesomeIcon></span> Vote
                </button>
            </div>
        </div>
    );
};

export default Character;