import { useState } from 'react';

export default function ToggleText() {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <button
                onClick={() => setVisible(prev => !prev)}
            >
                {visible ? 'Скрыть' : 'Показать'}
            </button>

            {visible && <p>Это текст</p>}
        </div>
    );
}