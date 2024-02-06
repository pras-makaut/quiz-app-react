import { useEffect, useState } from "react";
import { question } from "./utils/question";

function App() {

  console.log("question", question);
  // async function getQuestion(){
  //   const data = await fetch('https://opentdb.com/api.php?amount=20');
  //   // const json = await data.body.stringify();
  //   const question = await data.json();
  //   setQuestion(question?.results);
  // }
  useEffect(()=>{
    // getQuestion();
  },[]);
  return (
    <div className="h-screen bg-black flex items-center justify-center" >
      <div className="w-1/4 bg-violet-300 p-2">
        <div className="text-black font-bold">
          question
        </div>
      </div>
    </div>
  );
}

export default App;
