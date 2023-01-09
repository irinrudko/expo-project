import React, { ChangeEvent, useState } from 'react'
import { Text, TextInput, StyleSheet, View, TouchableOpacity } from 'react-native'

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
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
    const changeTitle = (e: string) => {
        setTitle(e)
    }

    return editMode ? (
        <View>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={changeTitle}
                onBlur={activateViewMode}
                autoFocus
            />
        </View>
    ) : (
        <TouchableOpacity style={styles.taskText} onPress={activateEditMode}>
            <Text>{props.value}</Text>
        </TouchableOpacity>
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
})
