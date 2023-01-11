import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
    variant: 'mainInput' | 'todolistInput'
}

export const AddItemForm = React.memo(function ({ addItem, disabled = false, variant }: AddItemFormPropsType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title)
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const onChangeHandler = (e: string) => {
        setTitle(e)
    }

    return (
        <View style={variant === 'mainInput' ? styles.inputMainContainer : styles.inputContainer}>
            <TextInput
                value={title}
                onChangeText={onChangeHandler}
                placeholder={variant === 'mainInput' ? 'Add new list' : 'What are you up to?'}
                style={variant === 'mainInput' ? styles.inputMain : styles.input}
                // autoFocus
            />
            <TouchableOpacity
                style={variant === 'mainInput' ? styles.mainButton : styles.button}
                onPress={addItemHandler}
            >
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
})

const styles = StyleSheet.create({
    taskTitle: {
        backgroundColor: '#fff',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'blue',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // margin: 20,
        marginLeft: 0,
    },
    input: {
        width: 270,
        backgroundColor: '#fffffe',
        fontSize: 22,
        margin: 20,
        marginLeft: 0,
        padding: 20,
        height: 30,
        borderRadius: 30,
        // color: 'black',
    },
    button: {
        backgroundColor: '#fffffe',
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontSize: 22,
        fontWeight: '300',
    },
    inputMainContainer: {
        // flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'blue',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // margin: 20,
        marginLeft: 0,
    },
    inputMain: {
        width: 270,
        backgroundColor: '#fffffe',
        fontSize: 18,
        margin: 20,
        marginLeft: 0,
        padding: 20,
        height: 70,
        borderRadius: 30,
    },
    mainButton: {
        backgroundColor: '#fffffe',
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
