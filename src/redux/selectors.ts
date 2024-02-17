import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Status } from './type'

const filterStatusSelector = (state: RootState) => state.filterStatus
const todoListSelector = (state: RootState) => state.todoList

export const todosRemainingSelector = createSelector(todoListSelector, filterStatusSelector, (todoList, status) => {
  console.log('🚀 ~ todosRemainingSelector ~ todoList:', todoList)
  if (status === Status.ALL) return todoList
  return todoList.filter((todo) => todo.status === status)
})
