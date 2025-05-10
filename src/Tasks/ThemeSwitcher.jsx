import { useState } from 'react';


export default function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');

    return (
        <div className={theme === 'light' ? 'bg-white text-black' : 'bg-gray text-white'}>
            <button
                onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
                className="px-4 py-2"
            >
                {theme === 'light' ? 'Перейти к тёмной теме' : 'Перейти к светлой теме'}
            </button>
            <p className="mt-2">Текущая тема: {theme}</p>
        </div>
    );
}