import { Action, ActionType, ITodo } from '../type'

const initialState: ITodo[] = []

const todoListReducer = (state: ITodo[] = initialState, action: Action): ITodo[] => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [...state, action.payload]

    case ActionType.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload)

    case ActionType.UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? ({ ...todo, status: action.payload.status, title: action.payload.title } as ITodo)
          : todo
      )

    default:
      return state
  }
}

export default todoListReducer
