import { useState } from 'react';

export default function Answer(props) {
    const [accurateResponse, setAccurateResponse] = useState(props.answer)







    return (
        <div className='answer'>
            {accurateResponse && <h1>{`${props.correctAnswer} is correct`}</h1>}
            {!accurateResponse && <h3>{`The flag is not ${props.wrongAnswer}, it is ${props.correctAnswer} `}</h3>}
            <button 
                className='restart-button'
                onClick={()=>props.reset()}
                >Restart</button>
        </div>
    )
}