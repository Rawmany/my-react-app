import { useState, useEffect } from 'react';

export default function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Размер окна браузера</h2>
                <div style={styles.sizeDisplay}>
                    <p style={styles.text}>
                        Текущая ширина: <span style={styles.value}>{width}px</span>
                    </p>
                </div>
                <div style={styles.visualization}>
                    <div style={{
                        ...styles.widthBar,
                        width: `${Math.min(width, 400)}px`
                    }} />
                    <div style={styles.scale}>
                        <div>0</div>
                        <div>{width}</div>
                    </div>
                </div>
                <p style={styles.hint}>Измените размер окна, чтобы увидеть изменения</p>
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
        padding: '20px',
        fontFamily: 'system-ui, sans-serif',
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
    sizeDisplay: {
        backgroundColor: '#f8f9fa',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '25px',
    },
    text: {
        fontSize: '1.2rem',
        margin: '0',
        color: '#333',
    },
    value: {
        fontWeight: 'bold',
        color: '#1890ff',
        fontSize: '1.4rem',
    },
    visualization: {
        marginBottom: '25px',
    },
    widthBar: {
        height: '30px',
        backgroundColor: '#1890ff',
        borderRadius: '4px',
        marginBottom: '10px',
        maxWidth: '100%',
        transition: 'width 0.2s ease',
    },
    scale: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#7f8c8d',
        fontSize: '0.9rem',
    },
    hint: {
        color: '#95a5a6',
        fontStyle: 'italic',
        margin: '0',
        fontSize: '0.9rem',
    },
};