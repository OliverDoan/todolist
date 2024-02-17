import { configureStore } from '@reduxjs/toolkit'
import { filterStatusSlice } from './slices/filterStatusSlice'
import { todoListSlice } from './slices/todoListSlice'

const store = configureStore({
  reducer: {
    filterStatus: filterStatusSlice.reducer,
    todoList: todoListSlice.reducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
