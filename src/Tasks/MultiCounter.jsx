import { useState } from 'react';

export default function MultiCounter() {
    const [counters, setCounters] = useState([
        { id: 1, count: 0 },
        { id: 2, count: 0 }
    ]);

    const handleIncrement = (id) => {
        setCounters(prevCounters =>
            prevCounters.map(counter =>
                counter.id === id
                    ? { ...counter, count: counter.count + 1 }
                    : counter
            )
        );
    };

    return (
        <div>
            {counters.map(counter => (
                <div key={counter.id}>
                    <p>{counter.count}</p>
                    <button
                        onClick={() => handleIncrement(counter.id)}
                    >
                        +
                    </button>
                </div>
            ))}
        </div>
    );
}