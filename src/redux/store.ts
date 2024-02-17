import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { filterStatusSlice } from './slices/filterStatusSlice'
import { todoListSlice } from './slices/todoListSlice'

const rootReducer = combineReducers({
  filterStatus: filterStatusSlice.reducer,
  todoList: todoListSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export default store
