import { useState } from 'react';

export default function TodoList() {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    return (
        <div>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Введите задачу"
            />
            <button onClick={handleAdd}>Добавить</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}