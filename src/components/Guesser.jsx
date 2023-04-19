import countries from '../assets/francophoneCountries.js'
import { useState } from 'react';
import francophoneCountries from '../assets/francophoneCountries.js';

export default function Guesser() {
    const [flag, setFlag] = useState(getRandomCountryCode())

    const [currentlyGuessing, setCurrentlyGuessing] = useState(true)

    function getRandomCountryCode() {
        return getRandomNumber(countries.length)
    }

    function getRandomNumber(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    function changeFlag() {
        setFlag(getRandomCountryCode())
    }

    function createFlagOptions(trueFlagCode, numberOfOptions) {
        const flagOptions = new Set()
        flagOptions.add(trueFlagCode)
        while (flagOptions.size < numberOfOptions) {
            flagOptions.add(getRandomCountryCode())
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

    function handleAnswer(countryCode) {

        console.log(countryCode === countries[flag].id)


    }

    const flagButtons = createFlagOptions(flag, 4).map(button => {
        const countryObject = francophoneCountries[button]
        return (
            <button className='guesser--button' onClick={() => handleAnswer(francophoneCountries[button].id)}> {countryObject.country} </button>
        )
    })




    return (
        <div className="guesser">
            <img src={`https://flagcdn.com/${countries[flag].id}.svg`} className="guesser--image" />
            {currentlyGuessing && <div className='guesser--buttons'>{flagButtons}</div>}

        </div>
    )
}

//