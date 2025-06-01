import { useState, useEffect } from 'react';

export default function AutoTimer() {
    const [count, setCount] = useState(0);

    useEffect(() => {

        const timerId = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);


        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div style={styles.container}>
            <p style={styles.counter}>Счётчик: {count}</p>
            <p style={styles.note}>Таймер запущен автоматически</p>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f7fa',
        fontFamily: 'system-ui, sans-serif',
        padding: '20px',
        textAlign: 'center',
    },
    counter: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#2c3e50',
        margin: '0 0 1rem 0',
        textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    note: {
        fontSize: '1rem',
        color: '#7f8c8d',
        margin: '0',
        fontStyle: 'italic',
    }
};