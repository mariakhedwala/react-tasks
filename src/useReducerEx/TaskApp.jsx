import React, { useReducer, useState } from 'react'
import AddTask from './AddTask'
import TaskList from './TaskList'

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            })
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const TaskApp = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    const [invalid, setInvalid] = useState(false);

    function handleAddTask(text) {
        if (text.length > 2) {
            dispatch({
                type: 'added',
                id: nextId++,
                text: text
            })
            setInvalid(false)
        }
        else setInvalid(true);
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        })
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        })
    }

    return (
        <>
            <h1>Prague Itinerary</h1>
            {invalid && <p>Invalid Entry. Enter more than 3 letters</p>}
            <AddTask onAddTask={handleAddTask} />
            <TaskList tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask} />
        </>
    )
}

export default TaskApp

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false }
];