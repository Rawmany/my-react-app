import { useState, useEffect } from 'react';

export default function GreetingDelay() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {

        if (name === '') {
            setGreeting('');
            return;
        }

        setIsTyping(true);

        const timerId = setTimeout(() => {
            setGreeting(`Привет, ${name}`);
            setIsTyping(false);
        }, 2000);

        return () => {
            clearTimeout(timerId);
            setIsTyping(false);
        };
    }, [name]);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Отложенное приветствие</h2>

                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Введите ваше имя"
                        style={styles.input}
                    />
                    {name && (
                        <button
                            style={styles.clearButton}
                            onClick={() => setName('')}
                            aria-label="Очистить"
                        >
                            ×
                        </button>
                    )}
                </div>

                <div style={styles.greetingContainer}>
                    {isTyping ? (
                        <div style={styles.typingIndicator}>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                            <div style={styles.dot}></div>
                        </div>
                    ) : greeting ? (
                        <p style={styles.greeting}>{greeting}</p>
                    ) : (
                        <p style={styles.hint}>Введите имя и подождите 2 секунды</p>
                    )}
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f2f5',
        fontFamily: 'system-ui, sans-serif',
        padding: '20px',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        padding: '30px',
        width: '100%',
        maxWidth: '500px',
        textAlign: 'center',
    },
    title: {
        color: '#2c3e50',
        marginTop: '0',
        marginBottom: '25px',
    },
    inputContainer: {
        position: 'relative',
        marginBottom: '25px',
    },
    input: {
        padding: '12px 40px 12px 15px',
        fontSize: '16px',
        border: '2px solid #ddd',
        borderRadius: '8px',
        outline: 'none',
        transition: 'all 0.3s',
    },
    clearButton: {
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
        color: '#999',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greetingContainer: {
        minHeight: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greeting: {
        fontSize: '1.5rem',
        margin: '0',
        fontWeight: '500',
        color: '#1890ff',
        animation: 'fadeIn 0.5s ease',
    },
    hint: {
        color: '#95a5a6',
        fontStyle: 'italic',
        margin: '0',
    },
    typingIndicator: {
        display: 'flex',
        justifyContent: 'center',
        gap: '6px',
    },
    dot: {
        width: '12px',
        height: '12px',
        backgroundColor: '#1890ff',
        borderRadius: '50%',
        animation: 'bounce 1.5s infinite ease',
    },
    '@keyframes bounce': {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-6px)' },
    },
    '@keyframes fadeIn': {
        '0%': { opacity: 0, transform: 'translateY(10px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
    },
};