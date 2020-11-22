import React, { useEffect, useState } from 'react';
import './App.css';
import { QComp } from './components/qComp';
import { Servise } from './service/servise';
import { quiz } from './types/questionType';

function App() {
 let [Qdata, setQdata] = useState<quiz[]>([])
 let [score, setScore] = useState(0) 
 let [currentValue, setCurrentValue] = useState(0)
  useEffect(()=>{
    async function fetchData() {
      const question:quiz[] =await Servise(3, "easy")
      // console.log(question,'data');
      setQdata(question)
    }
    fetchData()
  },[])
  // console.log(Qdata[currentValue],'Qdata')
  const handleSubmit=(e:React.FormEvent<EventTarget>,answer:string)=>{
    e.preventDefault();
    // console.log(answer,"answer")
    const abc:quiz=Qdata[currentValue]
    // setSelectedAnswer(answer)
    if (answer === abc.correct_answer){
      setScore(++score)
    }
    // setCurrentValue(++currentValue)
    if(currentValue !== Qdata.length-1)
    {
      setCurrentValue(++currentValue)
  }
  else{
    alert("Test Completed  "+score+'  out of  '+Qdata.length)
    setCurrentValue(0)
    setScore(0)
  }
}
  if(!Qdata.length)
  return <h2>Loading...</h2>
  return (
    <div>
      <h1 className="quiz">Quiz App</h1>
      <div>
        <QComp
        question={Qdata[currentValue].question}
        options={Qdata[currentValue].incorrect_answers}
        callback={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
