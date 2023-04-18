import countries from '../assets/francophoneCountries.js'
import { useState } from 'react';
import francophoneCountries from '../assets/francophoneCountries.js';

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
        console.log(createFlagOptions(flag,4))
    }

    function createFlagOptions(trueFlagCode, numberOfOptions){
        const flagOptions = []
        for(let i =0; i < numberOfOptions; i++){
            flagOptions.push(getRandomCountryCode())
        }
        flagOptions[getRandomNumber(numberOfOptions)] = trueFlagCode;
        return(flagOptions)

    }

    const flagButtons = createFlagOptions(flag, 4).map(flagNum=>{
        return(
            <button className='flag'> {francophoneCountries[flagNum].country} </button>
        )
    })


    

    return (
        <div className="guesser">
            <img src={`https://flagcdn.com/${countries[flag].id}.svg`} className="guesser--image" />
            <div className='guesser--buttons'>
                <button className='testBtn' onClick={changeFlag}>Change</button>
                {flagButtons}

            </div>

        </div>
    )
}

//