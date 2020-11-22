import React, { useState } from 'react';
import { questionPropType } from '../types/questionType';

export const QComp: React.FC<questionPropType> = ({ question, options, callback }) => {
    // console.log(question,options,'question,options')
    let [selectedAns, setSelectedAns] = useState('')
    const handleSelection = (ev: any) => {
        setSelectedAns(ev.target.value)
    }
    return (
        <div className="question_container">
            <h2>
                {question}
            </h2>
            <div>
                <form onSubmit={
                    (e: React.FormEvent<EventTarget>) =>
                        callback(e, selectedAns)
                }
                className="question_form"
                >
                    {
                        options.map((opt: string, ind: number) => {
                            return (
                                <div key={ind}>
                                    <label className="radio">
                                        <input type="radio"
                                            value={opt}
                                            name="opt"
                                            required
                                            checked={selectedAns===opt}
                                            onChange={handleSelection}
                                        />
                                        {++ind}  {opt}
                                    </label>
                                </div>
                            )
                        })
                    }
                    <input type="submit" className="submit"/>
                </form>
            </div>
        </div>
    )
}