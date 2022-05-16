import { Question } from 'store/questions/types'

const sortQuestion = (a: Question, b: Question) => (a.question.toLowerCase() > b.question.toLowerCase() ? 1 : -1)

export default sortQuestion
