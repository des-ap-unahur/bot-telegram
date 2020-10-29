import { QuestionInterface } from "./GetPolls.interface";

export const createArrayIterator = (num: number) => {
  return Array(num).fill(null);
}

export const createInputQuestions = (params: any) => {
  const { handleChangeInputQuestions, index, language, value } = params;
  return {
    type: 'text',
    name:'question' + index,
    title:language.question + ' ' + (index+1),
    handleChange: (e: any) => handleChangeInputQuestions(e, index),
    value,
    correction: true
  }
}

export const buildQuestions = (poll_id: number | string, question: string, description: string): QuestionInterface => {
  return {
    poll_id,
    question,
    description
  }
}