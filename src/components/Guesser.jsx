import countries from '../assets/francophoneCountries.js'
import { useState } from 'react';

export default function Guesser() {
    const [flag, setFlag] = useState(getRandomCountryCode())



    function getRandomCountryCode() {
        return getRandomNumber(countries.length)
    }
    function getRandomNumber(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    function changeFlag(){
        setFlag(getRandomCountryCode())
        console.log(flag, countries[flag].country)
    }

    function createFlagOptions(trueFlagCode, numberOfOptions){
        const flagOptions = []
        for(let i =0; i < numberOfOptions; i++){
            flagOptions.push
        }

    }


    

    return (
        <div className="guesser">
            <img src={`https://flagcdn.com/${countries[flag].id}.svg`} className="guesser--image" />
            <div className='guesser--buttons'>
                <button className='testBtn' onClick={changeFlag}>Change</button>

            </div>

        </div>
    )
}

//