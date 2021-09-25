import React, { useEffect, useState } from 'react';
import './CharacterContainer.css'
import Character from '../Character/Character';
import Votes from '../Votes/Votes';

const CharacterContainer = () => {
    const [characters, setCharacter] = useState([]);
    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        fetch('./data.JSON').then(res => res.json()).then(data => setCharacter(data))
    }, [])

    const handleVote = (character) => {
        const newCharacterList = [...characterList, character];
        setCharacterList(newCharacterList);
    }
    return (
        <div className="character-container">
            <div className="row row-cols-3 g-5">
                {
                    characters.map(character => <Character key={character.id} character={character} handleVote={handleVote}></Character>)
                }
            </div>
            <Votes characterList={characterList}></Votes>
        </div>
    );
};

export default CharacterContainer;