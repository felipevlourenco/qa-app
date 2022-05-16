export const ASYNC_TIMEOUT = 5000

export interface Question {
  id: number
  question: string
  awnser: string
}

export interface QuestionsState {
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
