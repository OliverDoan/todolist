import { createSlice } from '@reduxjs/toolkit'
import { Status } from '../type'

type initialStateType = Status

const initialState: initialStateType = Status.ALL

export const filterStatusSlice = createSlice({
  name: 'filterStatus',
  initialState,
  reducers: {
    filterStatusTodo: (_state, action) => {
      return action.payload
    }
  }
})
