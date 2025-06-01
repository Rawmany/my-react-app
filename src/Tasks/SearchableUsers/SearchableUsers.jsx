import { useState, useEffect } from 'react';

export default function SearchableUsers() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Фильтрация пользователей на основе запроса
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );

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
            <div style={styles.header}>
                <h1 style={styles.title}>Поиск пользователей</h1>

                <div style={styles.searchContainer}>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Поиск по имени..."
                        style={styles.searchInput}
                        disabled={isLoading || error}
                    />

                    {query && (
                        <button
                            style={styles.clearButton}
                            onClick={() => setQuery('')}
                            aria-label="Очистить поиск"
                        >
                            ×
                        </button>
                    )}
                </div>
            </div>

            {isLoading ? (
                <div style={styles.loaderContainer}>
                    <div style={styles.loader}></div>
                    <p>Загрузка пользователей...</p>
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
                <>
                    <div style={styles.stats}>
                        <p>Найдено: {filteredUsers.length} из {users.length}</p>
                        {query && <p>По запросу: <span style={styles.query}>{query}</span></p>}
                    </div>

                    <ul style={styles.list}>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map(user => (
                                <li key={user.id} style={styles.listItem}>
                                    <div style={styles.userCard}>
                                        <div style={styles.avatar}>
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p style={styles.userName}>{user.name}</p>
                                            <p style={styles.userEmail}>{user.email}</p>
                                            <p style={styles.userPhone}>{user.phone}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <div style={styles.noResults}>
                                <p>😕 Ничего не найдено</p>
                                <p>Попробуйте изменить запрос</p>
                            </div>
                        )}
                    </ul>
                </>
            )}
        </div>
    );
}

// Стили компонента
const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'system-ui, sans-serif',
    },
    header: {
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '1px solid #eee',
    },
    title: {
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '25px',
    },
    searchContainer: {
        position: 'relative',
        maxWidth: '600px',
        margin: '0 auto',
    },
    searchInput: {
        width: '100%',
        padding: '12px 40px 12px 15px',
        fontSize: '16px',
        border: '2px solid #ddd',
        borderRadius: '30px',
        outline: 'none',
        transition: 'all 0.3s',
    },
    searchInputFocus: {
        borderColor: '#3498db',
        boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.2)',
    },
    clearButton: {
        position: 'absolute',
        right: '15px',
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
    clearButtonHover: {
        backgroundColor: '#f5f5f5',
        color: '#333',
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
        flexShrink: 0,
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
    userPhone: {
        margin: '5px 0 0 0',
        color: '#95a5a6',
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
    stats: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
        padding: '10px 15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        fontSize: '0.9rem',
        color: '#6c757d',
    },
    query: {
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    noResults: {
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        color: '#6c757d',
        fontSize: '1.1rem',
    },
    // Анимация для лоадера
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    }
};