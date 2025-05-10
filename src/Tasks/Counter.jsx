import {useState} from "react";


export default function Counter() {
    const [count, setCount] = useState(0)
    const counterFn = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={counterFn}>Увеличить</button>
        </div>
    );
}

