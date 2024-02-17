import { createSlice } from '@reduxjs/toolkit'
import { ITodo } from '../type'
type initialStateType = ITodo[]

const initialState: initialStateType = []
export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload]
      // state.push(action.payload)
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
      // state.splice(action.payload, 1)
    },
    updateTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, status: action.payload.status, title: action.payload.title } : todo
      )
    }
  }
})
