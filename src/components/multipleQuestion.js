import React, { useContext, useEffect, useState } from 'react'
import CorrectAnswerContext from '../utils/CorrectAnswerContext';
const MultipleQuestion = ({question}) => {
    const [ans1,setAns1] = useState(5);
    const {noOfCorrectAns,setNoOfCorrectAns} = useContext(CorrectAnswerContext);
    console.log(ans1)
    const handleCheck = (e) => {
        setAns1(e.target.value);
    }
    
  return (
    <div className='p-2'>
        <div>
           {`Q = ${question.question}`}
        </div>
        <div>
            {question.answers.map((ans,idx) => (
                <div className='flex mt-2' key={idx}>
                    <input type="radio" value={idx} checked={ans1==idx}  onChange={(e) => handleCheck(e)}/>
                    <div className='p-2'>{ans.ans}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MultipleQuestion