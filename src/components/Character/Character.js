import React from 'react';
import './Character.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';

const Character = (props) => {
    const { name, sitcom, age, rating, budget, image } = props.character;
    return (
        <div className="single-character">
            <div><img className="char-image" src={image} alt="" /></div>
            <p className="sitcom-title">{sitcom}</p>
            <div className="d-flex justify-content-end pe-3">
                <div>
                    <p> Age : {age} Years</p>
                    <p><Rating readonly emptySymbol="far fa-star gold-star" fullSymbol="fas fa-star gold-star" initialRating={rating}></Rating></p>
                    <p className="character-budget">${budget}</p>
                </div>
            </div>
            <h2 className="pb-3">{name}</h2>
            <div className="d-flex justify-content-end pe-3">
                <button className="custom-btn" onClick={() => { props.handleVote(props.character) }}>
                    <span className="text-dark fs-5"><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></span> Vote
                </button>
            </div>
        </div>
    );
};

export default Character;