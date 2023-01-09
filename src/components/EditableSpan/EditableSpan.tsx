import React, { ChangeEvent, useState } from 'react'
import { Text, TextInput, StyleSheet, View } from 'react-native'

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
        <View
        // style={styles.input}
        >
            <TextInput value={title} onChangeText={changeTitle} onBlur={activateViewMode} autoFocus />
        </View>
    ) : (
        <Text onLongPress={activateEditMode}>{props.value}</Text>
    )
})

const styles = StyleSheet.create({
    input: {
        width: 270,
        backgroundColor: '#e3f6f5',
        fontSize: 25,
        // margin: 20,
        marginLeft: 0,
        padding: 20,
        // height: 70,
        borderRadius: 30,
    },
})
