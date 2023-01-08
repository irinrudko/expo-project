import React, { ChangeEvent, useState } from 'react'
import { Text, TextInput } from 'react-native'

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
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode ? (
        <TextInput value="Type sth..." />
    ) : (
        // <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />
        <Text
        //  onDoubleClick={activateEditMode}
        >
            {props.value}
        </Text>
    )
})
