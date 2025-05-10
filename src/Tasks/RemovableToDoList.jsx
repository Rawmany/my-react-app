import { useState } from 'react';

export default function RemovableTodoList() {
    const [todos, setTodos] = useState(['Пример задачи']);

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button
                            onClick={() => handleDelete(index)}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}