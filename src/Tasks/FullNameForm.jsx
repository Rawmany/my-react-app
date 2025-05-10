import { useState } from 'react';

export default function FullNameForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <div>
            <input
                placeholder="Имя"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                placeholder="Фамилия"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <p>Привет, {firstName} {lastName}!</p>
        </div>
    );
}