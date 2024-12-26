import React from 'react'
import { useNavigate } from 'react-router-dom'

const TaskEdit = ({ id }) => {

    const nav = useNavigate();

    const handleEdit = () => {
        nav('/edit/' + id)
    }

    return (
        <button style={styles.editButton} onClick={handleEdit}>Edit</button>
    )
}

const styles = {
    editButton: {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

export default TaskEdit