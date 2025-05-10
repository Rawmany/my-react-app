import { useState } from 'react';

export default function EmailForm() {
    const [email, setEmail] = useState('');

    const isValid = email.includes('@');

    return (
        <div>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <button disabled={!isValid}>Submit</button>
        </div>
    );
}