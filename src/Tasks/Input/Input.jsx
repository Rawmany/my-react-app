import React, { useState } from 'react';
import  "./input.css";

const ReactInputsChallenge = () => {
    const [inputs, setInputs] = useState(['']);

    const handleAddInput = () => {
        setInputs(prev => [...prev, '']);
    };

    const handleInputChange = (index, value) => {
        setInputs(prev => prev.map((item, i) => i === index ? value : item));
    };

    const handleSubmit = () => {
        alert('Все инпуты содержат "React"! Отправка данных...');

    };

    const allMatch = inputs.every(input => input.trim() === 'React');
    const isEmpty = inputs.length === 0;

    return (
        <div className="container">
            <div className="header">
                <h2>React Input Challenge</h2>
                <button
                    className="add-btn"
                    onClick={handleAddInput}
                    aria-label="Добавить поле ввода"
                >
                    + Add input
                </button>
            </div>

            <div className="input-grid">
                {inputs.map((value, index) => (
                    <div key={index} className="input-group">
                        <label htmlFor={`input-${index}`}>Input #{index + 1}</label>
                        <input
                            id={`input-${index}`}
                            type="text"
                            value={value}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            placeholder="Введите 'React'"
                            className={value.trim() === 'React' ? 'valid' : ''}
                            autoFocus={index === inputs.length - 1}
                        />
                    </div>
                ))}
            </div>

            <div className="footer">
                <button
                    className={`submit-btn ${allMatch ? 'active' : 'disabled'}`}
                    onClick={handleSubmit}
                    disabled={!allMatch || isEmpty}
                    title={isEmpty ? "Добавьте хотя бы один input" : "Все инпуты должны содержать 'React'"}
                >
                    Submit
                </button>

                <div className="status">
                    {allMatch && !isEmpty
                        ? '✅ Все поля содержат "React"!'
                        : `❌ Проверка не пройдена (${inputs.filter(i => i.trim() === 'React').length}/${inputs.length})`}
                </div>
            </div>
        </div>

    );
};

export default ReactInputsChallenge;