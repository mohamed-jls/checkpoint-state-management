import React, { useContext } from 'react'
import { TasksContext } from '../TasksContext'

const TaskDelete = ({id}) => {

    const {tasks, setTasks} = useContext(TasksContext);


    const handleDelete = () => {    
        const newTasks = tasks.filter((task, index) => index !== id)
        setTasks(newTasks)
    }
  return (
    <button style={styles.deleteButton} onClick={handleDelete}>Delete</button>
  )
}

const styles = {
    deleteButton:{
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

export default TaskDelete