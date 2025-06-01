import { useState, useEffect } from 'react';

export default function FakePage() {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        if (show) {

            setText('Загрузка...');

            const timer = setTimeout(() => {
                setText('Добро пожаловать на страницу');
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [show]);

    return (
        <div>
            <button onClick={() => setShow(true)}>Показать</button>
            <p>{text}</p>
        </div>
    );
}