export enum ActionType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO'
}

export interface ITodo {
  id: string
  title: string
  status: string
  time: string
}

interface actionAddTodo {
  type: ActionType.ADD_TODO
  payload: ITodo
}

interface actionDeleteTodo {
  type: ActionType.DELETE_TODO
  payload: string
}

export type Action = actionAddTodo | actionDeleteTodo
