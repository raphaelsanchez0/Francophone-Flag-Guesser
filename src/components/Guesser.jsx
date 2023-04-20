import countries from '../assets/francophoneFlags.js'
import { useState } from 'react';
import francophoneCountries from '../assets/francophoneFlags.js';
import Answer from './Answer.jsx';

export default function Guesser() {
    const [shownFlagIndex, setShownFlagIndex] = useState(getRandomFlagIndex())
    //index is refering to the index of the flag in the francophoneFlags.js

    const [guessingStatus, setGuessingStatus] = useState({
        status: "guessing",
        wrongAnswer: ""
    })

    function getRandomFlagIndex() {
        return getRandomNumber(countries.length)
    }

    function getRandomNumber(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    function changeFlag() {
        setShownFlagIndex(getRandomFlagIndex())
    }

    function createFlagOptions(trueFlagCode, numberOfOptions) {
        const flagOptions = new Set()
        flagOptions.add(trueFlagCode)
        while (flagOptions.size < numberOfOptions) {
            flagOptions.add(getRandomFlagIndex())
        }

        const shuffledFlagOptions = shuffleArray(Array.from(flagOptions))

        return shuffledFlagOptions;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function reset(){
        changeFlag()
        setGuessingStatus(prevStatus => ({
            ...prevStatus,
            status: 'guessing',
            wrongAnswer: ""
        }))
    
    }

    

    function handleAnswer(selectedFlagIndex) {
        if (selectedFlagIndex === countries[shownFlagIndex].id) {
            setGuessingStatus(prevStatus => ({
                ...prevStatus,
                status: 'correctAnswer'
            }))
        } else {
            const wrongFlag = countries.find(country => country.id === selectedFlagIndex)
            setGuessingStatus(prevStatus => ({
                ...prevStatus,
                status: 'wrongAnswer',
                wrongAnswer: `${wrongFlag.country}`
            }))
        }


    }

    const flagButtons = createFlagOptions(shownFlagIndex, 4).map(button => {
        const countryObject = countries[button]
        return (
            <button className='answer-button' onClick={() => handleAnswer(francophoneCountries[button].id)}> {countryObject.country} </button>
        )
    })

    return (
        <div className="guesser">
            <img src={`https://flagcdn.com/${countries[shownFlagIndex].id}.svg`} className="flag-image" />

            {guessingStatus.status === "guessing" &&
                <div className='answer-buttons'>
                    {flagButtons}
                </div>}

            {guessingStatus.status === "correctAnswer" &&
                <Answer 
                    answer={true} 
                    correctAnswer={countries[shownFlagIndex].country} 
                    reset = {reset}
                    />}

            {guessingStatus.status === "wrongAnswer" &&
                <Answer 
                    answer={false} 
                    correctAnswer={countries[shownFlagIndex].country}
                    wrongAnswer={guessingStatus.wrongAnswer} 
                    reset = {reset}
                    />}

        </div>
    )
}

//