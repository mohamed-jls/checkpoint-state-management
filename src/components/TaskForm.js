import React ,{useRef ,useContext} from 'react'
import {TasksContext} from '../TasksContext'
import { useNavigate, useParams } from 'react-router-dom'

const TaskForm = () => {
    const {tasks, setTasks} = useContext(TasksContext);

    const titleRef = useRef();
    const descriptionRef = useRef();

    const navigator = useNavigate();
    const { id } = useParams();

    const title = tasks[id]?.title || '';
    const description = tasks[id]?.description || '';

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        setTasks([...tasks, {title, description}]);
        navigator('/');
    }
    const handleEdit = (e) => { 
        e.preventDefault();
        const updatedTasks = tasks.map((task, index) => {
            if (index === Number(id)) {
                return {
                    ...task,
                    title: titleRef.current.value,
                    description: descriptionRef.current.value,
                };
            }
            return task;
        });
        setTasks(updatedTasks);
        navigator('/');
    };
    

    return (
        <div style={styles.container}>
            <form style={styles.form}>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Title" ref={titleRef} defaultValue={title}/>
                <label htmlFor="description">Description</label>
                <input type="text" placeholder="Description" ref={descriptionRef} defaultValue={description}/>
                {id 
                    ?<button onClick={handleEdit}>Edit Task</button>
                    :<button onClick={handleSubmit}>Add Task</button>
                }
            </form>
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
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',

    }
}

export default TaskForm