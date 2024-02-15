import { ActionType, ITodo, Status } from './type'

export const addTodo = (data: ITodo) => {
  return {
    type: ActionType.ADD_TODO,
    payload: data
  }
}

export const deleteTodo = (id: string) => {
  return {
    type: ActionType.DELETE_TODO,
    payload: id
  }
}

export const filterStatusTodo = (status: Status) => {
  return {
    type: ActionType.FILTER_STATUS_TODO,
    payload: status
  }
}
