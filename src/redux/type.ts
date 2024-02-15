export enum ActionType {
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  FILTER_STATUS_TODO = 'FILTER_STATUS_TODO'
}

export enum Status {
  ALL = 'ALL',
  INCOMPLETE = 'INCOMPLETE',
  COMPLETED = 'COMPLETED'
}

export interface ITodo {
  id: string
  title: string
  status: Status
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

interface actionFilterStatusTodo {
  type: ActionType.FILTER_STATUS_TODO
  payload: Status
}

export type Action = actionAddTodo | actionDeleteTodo | actionFilterStatusTodo
