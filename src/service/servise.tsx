import { QuestionType, quiz } from "../types/questionType";

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)
export const Servise = async (totalQuestions: number, level: string):Promise<QuestionType[]> => {

    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
    const {results} = await res.json();
    // const 
    // console.log(data, 'data')
    const question:QuestionType[]= results.map((QuesObj:quiz)=>
    {
        return{
        question: QuesObj.question,
        incorrect_answers:shuffleArray(QuesObj.incorrect_answers.concat(QuesObj.correct_answer)),
        correct_answer:QuesObj.correct_answer
    }})
    return question
}

// const shuffleArray = (array: any[]) =>
// [...array].sort(() => Math.random() - 0.5)