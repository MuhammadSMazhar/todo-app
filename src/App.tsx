import React, { useEffect, useState } from 'react';
import './App.css';
import { QComp } from './components/qComp';
import { Servise } from './service/servise';
import { quiz } from './types/questionType';

function App() {
 let [Qdata, setQdata] = useState<quiz[]>([])
 let [currentValue, setCurrentValue] = useState(0)
  useEffect(()=>{
    async function fetchData() {
      const question:quiz[] =await Servise(10, "easy")
      // console.log(question,'data');
      setQdata(question)
    }
    fetchData()
  },[])
  // console.log(Qdata,'Qdata')
  const handleSubmit=(e:React.FormEvent<EventTarget>)=>{
    e.preventDefault();
    setCurrentValue(++currentValue)
  }
  if(!Qdata.length)
  return <h2>Loading..</h2>
  return (
    <div>
      hi
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
