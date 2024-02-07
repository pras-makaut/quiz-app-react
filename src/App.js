import { createContext, useEffect, useState } from "react";
import { question } from "./utils/question";


function App() {
  const [idx,setIdx] = useState(0);

  const [correctAnswer,setCorrectAnswer] = useState([]);
  const [ans1,setAns1] = useState([5,5,5,5,5,5,5,5,5,5]);
    
    console.log("ANS1= ", ans1[idx],"idx=",idx)
    const handleCheck = (e) => {
        const newans1 = ans1.map((initialAns,index)=>{
            if(index===idx){
                return e.target.value;
            }else{
                return initialAns;
            }
        })
        setAns1(newans1);
        console.log(ans1,e.target.value)
    }
    const handlePrevClick = () => {
        setIdx((prevIdx) => {return prevIdx-1});
        console.log(question[idx].answers[ans1[idx]]?.ans,question[idx].answers[ans1[idx]]?.isTrue)
    }

    const handleNextClick = () => {
        setIdx((prevIdx) => {return prevIdx+1})
        console.log(question[idx].answers[ans1[idx]]?.ans,question[idx].answers[ans1[idx]]?.isTrue)
    }
    let total = 0;
    const handleSubmit = () => {
        for(let i=0;i<question.length;i++){
            if(question[i].answers[ans1[i]]?.isTrue){
                total++;
            }
        }
        console.log(total);
        console.log(question[idx].answers[ans1[idx]]?.ans,question[idx].answers[ans1[idx]]?.isTrue)
    }

  
 
  return (
    
    <div className="h-screen bg-black flex items-center justify-center" >
      <div className="w-1/3 bg-violet-300 p-2">
        <div className="text-black font-bold">
            <div className='p-2'>
                <div>
                {`Q = ${question[idx].question}`}
                </div>
                <div>
                    {question[idx].answers.map((ans,indx) => (
                        <div className='flex mt-2' key={indx}>
                            <input type="radio" value={indx} checked={ans1[idx]==indx}  onChange={(e) => handleCheck(e)}/>
                            <div className='p-2'>{ans.ans}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end p-4">
                {idx!==0 && <button className="p-2 bg-black text-white"   onClick={()=>handlePrevClick() }>Prev</button>}
                { (idx<(question.length-1)) && <button className={`p-2 bg-black text-white ml-2`} onClick={() => handleNextClick()}>Next</button>}
                { (idx==(question.length-1)) && <button className={`p-2 bg-black text-white ml-2`} onClick={() => handleSubmit()}>Submit</button>}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
