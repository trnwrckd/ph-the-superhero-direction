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
    characterList.map(character => console.log(character.id));
    return (
        <div className="character-container">
            <div className="characters-grid">
                {
                    characters.map(character => <Character key={character.id} character={character} handleVote={handleVote}></Character>)
                }
            </div>
            <div>
                <Votes characterList={characterList}></Votes>
            </div>
        </div>
    );
};

export default CharacterContainer;