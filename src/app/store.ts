import { tasksReducer } from '../features/TodolistsList/tasks-reducer'
import { todolistsReducer } from '../features/TodolistsList/todolists-reducer'
import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'
import { appReducer } from './app-reducer'
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = () => useDispatch<AppDispatch>()

// @ts-ignore
window.store = store
