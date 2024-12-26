import './App.css';
import TasksList from './components/TasksList';
import TaskForm from './components/TaskForm';
import { TasksProvider } from './TasksContext'
import { Routes, Route } from 'react-router-dom'


function App() {
    return (
        <div className="App">
            <TasksProvider>
                <Routes>
                    <Route path="/" element={<TasksList />} />
                    <Route path="/add" element={<TaskForm />} />
                    <Route path="/edit/:id" element={<TaskForm />} />
                </Routes>
            </TasksProvider>
        </div>

    );
}

export default App;
