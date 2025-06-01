import { useState, useEffect } from 'react';

export default function PageTitleCounter() {
    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = `Текущий счёт: ${count}`;


        return () => {
            document.title = 'React App';
        };
    }, [count]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div style={containerStyle}>
            <p style={counterStyle}>{count}</p>
            <button
                onClick={increment}
                style={buttonStyle}
            >
                Увеличить
            </button>
        </div>
    );
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f2f5',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
};

const counterStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#1890ff',
    margin: '0 0 24px 0',
};

const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#1890ff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
};