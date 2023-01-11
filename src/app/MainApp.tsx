import React from 'react'
import { View } from 'react-native'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import { useSelector } from 'react-redux'
import { AppRootStateType } from './store'
import { RequestStatusType } from './app-reducer'

export const MainApp = () => {
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    return (
        <View style={{}}>
            <View>
                <TodolistsList />
            </View>
        </View>
    )
}
