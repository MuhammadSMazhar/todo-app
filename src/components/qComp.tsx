import React from 'react';
import { questionPropType } from '../types/questionType';

export const QComp:React.FC<questionPropType>=({question,options,callback})=>{
    // console.log(question,options,'question,options')
    return(
        <div>
            <div>
                {question}
            </div>
            <div>
                <form onSubmit={callback}>
                    {
                        options.map((opt:string,ind:number)=>{
                            return(
                                <div key={ind}>
                                <label>
                                    <input type="radio"
                                    value={opt}
                                    name="opt"
                                    />
                                   {++ind}  {opt}
                                </label>
                                </div>
                            )
                        })
                    }
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}