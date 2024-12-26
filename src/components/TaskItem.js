import React from 'react'
import TaskDelete from './TaskDelete'
import TaskEdit from './TaskEdit'

const TaskItem = ({item,id}) => {
  return (
    <div style={styles.listItems}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <TaskDelete id={id} />
        <TaskEdit id={id} />
    </div>
  )
}

const styles = {
    listItems: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        border: '1px solid black',
        padding: '10px',
        borderRadius: '5px',
    },
}

export default TaskItem