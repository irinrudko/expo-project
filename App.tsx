import { useState } from 'react'
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const tasks = [
    { id: 1, title: 'html', isDone: true },
    { id: 2, title: 'css', isDone: true },
    { id: 3, title: 'js', isDone: true },
    { id: 4, title: 'react', isDone: true },
    { id: 5, title: 'react native', isDone: false },
]

export default function App() {
    const [value, setValue] = useState('')

    return (
        <View style={styles.app}>
            <View style={styles.header}>
                <Text>Home</Text>
            </View>

            <View style={styles.main}>
                <Text style={styles.title}>Today's tasks</Text>
                <Tasks />
                <View>
                    {/* <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text>TouchableOpacity</Text>
                    </TouchableOpacity>
                    <Pressable style={styles.button} onPress={() => {}}>
                        {({ pressed }) => (pressed ? <Text>Pressed</Text> : <Text>Press me</Text>)}
                    </Pressable> */}
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        placeholder="What are you up to?"
                        style={styles.input}
                    />
                </View>
            </View>
        </View>
    )
}

const Tasks = () => {
    const Task = ({ title, isDone }) => (
        <View style={styles.tasksContainer}>
            <BouncyCheckbox isChecked={isDone} onPress={() => {}} />
            <Text style={styles.text}>{title}</Text>
        </View>
    )

    const renderTasks = ({ item }) => <Task title={item.title} isDone={item.isDone} />

    return <FlatList data={tasks} renderItem={renderTasks} keyExtractor={(task) => task.id} />
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#ffd803',
        alignItems: 'center',
        marginTop: 50,
    },
    header: {
        flex: 1,
        backgroundColor: '#fffffe',
        width: '100%',
        justifyContent: 'center',
    },
    main: {
        flex: 15,
    },
    title: {
        fontSize: 25,
        fontWeight: '800',
        marginTop: 80,
    },

    tasksContainer: {
        backgroundColor: '#fffffe',
        padding: 20,
        borderRadius: 15,
        margin: 10,
        width: 350,
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
    },
    input: {
        width: '70%',
        backgroundColor: '#fffffe',
        fontSize: 18,
        margin: 20,
        padding: 17,
        borderRadius: 30,
        marginBottom: 30,
    },
    boxTask: {
        flexDirection: 'row',
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginVertical: 3,
    },
    button: {
        backgroundColor: '#fffffe',
        padding: 12,
        marginVertical: 10,
        width: 150,
    },
})
