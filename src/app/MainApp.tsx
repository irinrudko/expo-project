import React from 'react'
import { View } from 'react-native'

// import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
// import { ErrorSnackbar } from '../components/ErrorSnackbar/ErrorSnackbar'
import { useSelector } from 'react-redux'
import { AppRootStateType } from './store'
import { RequestStatusType } from './app-reducer'

type PropsType = {
    demo?: boolean
}

export const MainApp = ({ demo = false }: PropsType) => {
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    return (
        <View>
            {/* <ErrorSnackbar /> */}
            {/* <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
             { status === 'loading' &&  <LinearProgress /> }
            </AppBar> */}
            <View>
                <TodolistsList demo={demo} />
            </View>
        </View>
    )
}
