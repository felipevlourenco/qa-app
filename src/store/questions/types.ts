export const ASYNC_TIMEOUT = 5000

export interface Question {
  id: number
  question: string
  awnser: string
}

export interface State {
  state: 'IDLE' | 'PENDING' | 'COMPLETED'
}

export const initialQuestion: Question = {
  id: 1,
  question: 'How to add a question?',
  awnser: 'Just use the form below'
}

export interface QuestionsState extends State {
  data: Question[]
}

export interface AddQuestionAction {
  question: string
  awnser: string
}

export interface EditQuestionAction {
  id: number
  question: string
  awnser: string
}

export interface DeleteQuestionAction {
  id: number
}
