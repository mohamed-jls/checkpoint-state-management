import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TasksContext } from '../TasksContext'
import TaskItem from './TaskItem'

const TasksList = () => {
    const nav = useNavigate()
    const { tasks } = useContext(TasksContext)
    return (
        <div style={styles.container}>
            {tasks.map((task, index) => (
                <TaskItem key={index} item={task} id={index} />
            ))}
            <button type="button" onClick={()=>{nav('/add')}}>Add Task</button>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: '50%',
    },
    button:{
        backgroundColor: 'violet',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    listItems: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
        width: '100%',
    }
}

export default TasksList