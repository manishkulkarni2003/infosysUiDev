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
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
        <div>
            {showScore?(
                <div>
                    <h2>Your Score:{score}</h2>
                    {score>0?(<p>Congrats You got it </p>):(<p>Better try next Time</p>)}
                </div>
            ):(
                <>
        
      <h1>{currentQuestion.question}</h1>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
        {currentQuestion.options.map((option,index)=>(
            <li key={index} onClick={()=>handleOption(option)}
            style={{
                  padding: '10px',
                  margin: '5px 0',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  backgroundColor:
                    selectedOption === option ? '#d3e3fd' : 'white',
                }}>{option}</li>
        ))}
        
        
    </ul>
    <button onClick={handleNext}  style={{ marginTop: '10px' }}>Next</button>
    </>
            )}
</div>
    </div>
  )
}

export default Quiz
