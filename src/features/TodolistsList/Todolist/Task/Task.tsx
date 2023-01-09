import React, { ChangeEvent, useCallback } from 'react'
import { EditableSpan } from '../../../../components/EditableSpan/EditableSpan'
import { TaskStatuses, TaskType } from '../../../../api/todolists-api'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const removeTask = useCallback(() => {
        return Alert.alert('Are your sure?', 'Are you sure you want to delete this task?', [
            {
                text: 'No',
            },
            {
                text: 'Yes',
                onPress: () => {
                    props.removeTask(props.task.id, props.todolistId)
                },
            },
        ])
    }, [props.task.id, props.todolistId])

    const onChangeHandler = useCallback(
        (checked: boolean) => {
            props.changeTaskStatus(props.task.id, checked ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
        },
        [props.task.id, props.todolistId]
    )

    const onTitleChangeHandler = useCallback(
        (newValue: string) => {
            props.changeTaskTitle(props.task.id, newValue, props.todolistId)
        },
        [props.task.id, props.todolistId]
    )

    return (
        <TouchableOpacity
            onLongPress={removeTask}
            // onPress={changeStatus}
        >
            <View key={props.task.id} style={styles.taskContainer}>
                <BouncyCheckbox isChecked={props.task.status === TaskStatuses.Completed} onPress={onChangeHandler} />
                <EditableSpan value={props.task.title} onChange={onTitleChangeHandler} variant="task" />
            </View>
        </TouchableOpacity>
    )
})

const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#fffffe',
        padding: 20,
        borderRadius: 15,
        margin: 10,
        width: 350,
        flexDirection: 'row',
    },
    // text: {
    //     fontSize: 20,
    // },
    // boxTask: {
    //     flexDirection: 'row',
    //     paddingVertical: 4,
    //     paddingHorizontal: 20,
    //     marginVertical: 3,
    // },
})
