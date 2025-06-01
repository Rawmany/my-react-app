import { useState, useEffect } from 'react';

export default function OnlineStatus() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.statusContainer}>
                <div style={{
                    ...styles.statusIndicator,
                    backgroundColor: isOnline ? '#4CAF50' : '#F44336'
                }} />
                <p style={styles.text}>
                    Статус: <span style={styles.statusText}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
                </p>
            </div>

            <p style={styles.hint}>
                {isOnline
                    ? 'Вы подключены к интернету'
                    : 'Проверьте ваше интернет-соединение'}
            </p>
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
        padding: '20px',
        fontFamily: 'system-ui, sans-serif',
        textAlign: 'center',
    },
    statusContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '12px',
    },
    statusIndicator: {
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        transition: 'background-color 0.3s ease',
    },
    text: {
        fontSize: '1.5rem',
        margin: 0,
        color: '#333',
    },
    statusText: {
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    hint: {
        fontSize: '1rem',
        color: '#7f8c8d',
        margin: '8px 0 0 0',
        fontStyle: 'italic',
    }
};