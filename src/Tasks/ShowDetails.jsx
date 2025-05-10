import { useState } from 'react';

export default function ShowDetails() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div>
            <button
                onClick={() => setShowDetails(prev => !prev)}
            >
                {showDetails ? 'Скрыть детали' : 'Показать детали'}
            </button>

            {showDetails && <p>Это подробности</p>}
        </div>
    );
}