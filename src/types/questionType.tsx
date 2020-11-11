import React from 'react';
export type quiz ={
    incorrect_answers: string[]
    question: string
    correct_answer: string
}
export type QuestionType = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}
export type questionPropType={
    question: string
    options:string[]
    callback :(e:React.FormEvent<EventTarget>)=>void
}