import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppRootStateType, useAppDispatch } from '../../app/store'
import {
    addTodolistTC,
    changeTodolistFilterAC,
    changeTodolistTitleTC,
    fetchTodolistsTC,
    FilterValuesType,
    removeTodolistTC,
    TodolistDomainType,
} from './todolists-reducer'
import { addTaskTC, removeTaskTC, TasksStateType, updateTaskTC } from './tasks-reducer'
import { TaskStatuses } from '../../api/todolists-api'
import { AddItemForm } from '../../components/AddItemForm/AddItemForm'
import { Todolist } from './Todolist/Todolist'
import { View, StyleSheet, ScrollView } from 'react-native'
import { GlobalStyles } from '../../../GlobalStyles'

export const TodolistsList = () => {
    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>((state) => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>((state) => state.tasks)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const thunk = fetchTodolistsTC()
        dispatch(thunk)
    }, [])

    const removeTask = useCallback(function (id: string, todolistId: string) {
        const thunk = removeTaskTC(id, todolistId)
        dispatch(thunk)
    }, [])

    const addTask = useCallback(function (title: string, todolistId: string) {
        const thunk = addTaskTC(title, todolistId)
        dispatch(thunk)
    }, [])

    const changeStatus = useCallback(function (id: string, status: TaskStatuses, todolistId: string) {
        const thunk = updateTaskTC(id, { status }, todolistId)
        dispatch(thunk)
    }, [])

    const changeTaskTitle = useCallback(function (id: string, newTitle: string, todolistId: string) {
        const thunk = updateTaskTC(id, { title: newTitle }, todolistId)
        dispatch(thunk)
    }, [])

    const changeFilter = useCallback(function (value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value)
        dispatch(action)
    }, [])

    const removeTodolist = useCallback(function (id: string) {
        const thunk = removeTodolistTC(id)
        dispatch(thunk)
    }, [])

    const changeTodolistTitle = useCallback(function (id: string, title: string) {
        const thunk = changeTodolistTitleTC(id, title)
        dispatch(thunk)
    }, [])

    const addTodolist = useCallback(
        (title: string) => {
            const thunk = addTodolistTC(title)
            dispatch(thunk)
        },
        [dispatch]
    )

    return (
        <>
            <ScrollView style={{}}>
                {todolists.map((tl) => {
                    let allTodolistTasks = tasks[tl.id]

                    return (
                        <View key={tl.id}>
                            <View style={{ padding: 10 }}>
                                <Todolist
                                    todolist={tl}
                                    tasks={allTodolistTasks}
                                    removeTask={removeTask}
                                    changeFilter={changeFilter}
                                    addTask={addTask}
                                    changeTaskStatus={changeStatus}
                                    removeTodolist={removeTodolist}
                                    changeTaskTitle={changeTaskTitle}
                                    changeTodolistTitle={changeTodolistTitle}
                                />
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
            <View style={[GlobalStyles.border]}>
                <AddItemForm variant={'mainInput'} addItem={addTodolist} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({})
