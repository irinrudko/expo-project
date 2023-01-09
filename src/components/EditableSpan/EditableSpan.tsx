import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native'

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    variant: 'todolistTitle' | 'task'
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.value)

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.value)
    }
    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    }
    const changeTitle = (title: string) => {
        setTitle(title)
    }

    return editMode ? (
        <View>
            <TextInput
                style={
                    (props.variant === 'task' && styles.input) ||
                    (props.variant === 'todolistTitle' && styles.todolistTitle)
                }
                value={title}
                onChangeText={changeTitle}
                onBlur={activateViewMode}
                autoFocus
            />
        </View>
    ) : (
        <Text
            style={
                (props.variant === 'task' && styles.taskText) ||
                (props.variant === 'todolistTitle' && styles.todolistTitle)
            }
            onPress={activateEditMode}
        >
            <Text style={props.variant === 'todolistTitle' && styles.todolistTitle}>{props.value}</Text>
        </Text>
    )
})

const styles = StyleSheet.create({
    input: {
        color: '#ffd803',
    },
    taskText: {
        fontSize: 18,
        padding: 5,
        paddingRight: '20%',
        // backgroundColor: 'red',
    },
    todolistTitle: {
        fontSize: 25,
        fontWeight: '600',
    },
})
