import { useState, useEffect } from 'react';

export default function UsersList() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }

                const data = await response.json();
                setUsers(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setUsers([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Пользователи:</h2>

            {isLoading ? (
                <div style={styles.loaderContainer}>
                    <div style={styles.loader}></div>
                    <p>Загрузка данных...</p>
                </div>
            ) : error ? (
                <div style={styles.error}>
                    <p>⚠️ Ошибка при загрузке данных</p>
                    <p style={styles.errorText}>{error}</p>
                    <button
                        style={styles.retryButton}
                        onClick={() => window.location.reload()}
                    >
                        Повторить попытку
                    </button>
                </div>
            ) : (
                <ul style={styles.list}>
                    {users.map(user => (
                        <li key={user.id} style={styles.listItem}>
                            <div style={styles.userCard}>
                                <div style={styles.avatar}>
                                    {user.name.charAt(0)}
                                </div>
                                <div>
                                    <p style={styles.userName}>{user.name}</p>
                                    <p style={styles.userEmail}>{user.email}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <p style={styles.footer}>Всего пользователей: {users.length}</p>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'system-ui, sans-serif',
    },
    title: {
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '30px',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        marginBottom: '15px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s, box-shadow 0.2s',
    },
    listItemHover: {
        transform: 'translateY(-3px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },
    userCard: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 20px',
        gap: '20px',
    },
    avatar: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#3498db',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    userName: {
        margin: 0,
        fontWeight: '600',
        color: '#2c3e50',
        fontSize: '1.1rem',
    },
    userEmail: {
        margin: '5px 0 0 0',
        color: '#7f8c8d',
        fontSize: '0.9rem',
    },
    footer: {
        textAlign: 'center',
        color: '#95a5a6',
        marginTop: '30px',
        fontSize: '0.9rem',
    },
    loaderContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
    },
    loader: {
        width: '50px',
        height: '50px',
        border: '5px solid #f3f3f3',
        borderTop: '5px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px',
    },
    error: {
        backgroundColor: '#ffebee',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#c62828',
    },
    errorText: {
        margin: '10px 0',
        fontSize: '0.9rem',
    },
    retryButton: {
        padding: '8px 16px',
        backgroundColor: '#e0e0e0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'background-color 0.3s',
    },
    // Добавляем анимацию для лоадера
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    }
};