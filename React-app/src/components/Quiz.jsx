import React, { useState } from 'react'

const Quiz = () => {
    const questions=[{
        question:"Who is the Prime Minister",
        options:["modi","rahul","Yadav","mulla"],
        correct:"modi"
    },{
        question:"Who is the goat of ipl",
        options:["kohli","abd","raina","warner"],
        correct:"kohli"
    },{
        question:"Who is Father of Pakistan",
        options:["modi","kohli","IndianArmy","Usa"],
        correct:"IndianArmy"
    }]
    const [correctQuesIndex,setCorrectQuesIndex]=useState(0)
    const currentQuestion=questions[correctQuesIndex]
    const[selectedOption,setSelectedOption]=useState(null)
    const[score,setScore]=useState(0)
    const [showScore,setShowScore]=useState(false)
    const handleOption=(option)=>{
        setSelectedOption(option)
    }

    const handleNext=()=>{
        if(selectedOption===currentQuestion.correct){
            setScore(score+1)
        }
        setSelectedOption(null)
        if(correctQuesIndex+1<questions.length){
            setCorrectQuesIndex(correctQuesIndex+1)
        }else{
            setShowScore(true)
        }
    }



  return (
    <div>
        <div>
            {showScore?(
                <div>
                    <h2>Your Score:{score}</h2>
                </div>
            ):(
                <>
        
      <h1>{currentQuestion.question}</h1>
    <ul>
        {currentQuestion.options.map((option,index)=>(
            <li key={index} onClick={()=>handleOption(option)}>{option}</li>
        ))}
        
        
    </ul>
    <button onClick={handleNext}>Next</button>
    </>
            )}
</div>
    </div>
  )
}

export default Quiz
