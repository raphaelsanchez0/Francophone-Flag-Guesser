import countries from '../assets/francophoneFlags.js'
import { useState } from 'react';
import francophoneCountries from '../assets/francophoneFlags.js';
import Answer from './Answer.jsx';

export default function Guesser() {
    const [shownFlag, setShownFlag] = useState(getRandomFlagCode())

    const [guessingStatus, setGuessingStatus] = useState({
        status:"guessing",
        wrongAnswer:""
    })

    function getRandomFlagCode() {
        return getRandomNumber(countries.length)
    }

    function getRandomNumber(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    function changeFlag() {
        setShownFlag(getRandomFlagCode())
    }

    function createFlagOptions(trueFlagCode, numberOfOptions) {
        const flagOptions = new Set()
        flagOptions.add(trueFlagCode)
        while (flagOptions.size < numberOfOptions) {
            flagOptions.add(getRandomFlagCode())
        }

        const shuffledflagOptions = shuffleArray(Array.from(flagOptions))

        return shuffledflagOptions;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function createAnswer(){

    }

    function handleAnswer(selectedFlagCode) {

        

        if (selectedFlagCode === countries[shownFlag].id) {
            setGuessingStatus(prevStatus => ({
                ...prevStatus,
                status: 'correctAnswer'
            }))
        } else {
            const wrongFlag = countries.find(country => country.id ===selectedFlagCode)
            setGuessingStatus(prevStatus => ({
                ...prevStatus,
                status: 'wrongAnswer',
                wrongAnswer: `${wrongFlag.country}`
            }))
        }


    }

    const flagButtons = createFlagOptions(shownFlag, 4).map(button => {
        const countryObject = francophoneCountries[button]
        return (
            <button className='guesser--button' onClick={() => handleAnswer(francophoneCountries[button].id)}> {countryObject.country} </button>
        )
    })




    return (
        <div className="guesser">
            <img src={`https://flagcdn.com/${countries[shownFlag].id}.svg`} className="guesser--image" />
            {guessingStatus.status==="guessing" && 
            <div className='guesser--buttons'>{flagButtons}</div>}
            {guessingStatus.status ==="correctAnswer" && 
            <Answer answer={true} correctAnswer={countries[shownFlag].country}/>}
            {guessingStatus.status ==="wrongAnswer" && 
            <Answer answer={false} correctAnswer={countries[shownFlag].country}
            wrongAnswer={guessingStatus.wrongAnswer}
            />}

        </div>
    )
}

//