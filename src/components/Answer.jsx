import { useState } from 'react';

export default function Answer(props){
    const[accurateResponse, setAccurateResponse] = useState(props.answer)

    

    



    return(
        <div className='answer'>
            {accurateResponse && <h3>{`${props.correctAnswer} is correct`}</h3>}
            {!accurateResponse && <h3>{`The flag is not ${props.wrongAnswer}, it is ${props.correctAnswer} `}</h3>}
        </div>
    )
}