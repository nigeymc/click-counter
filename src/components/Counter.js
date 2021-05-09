import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return (
        <div className="wrapper">
            <div className="wrapper__counter">
                <button onClick={handleDecrement}>-</button>
                <p>Count is {count}</p>
                <button onClick={handleIncrement}>+</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export { Counter as default };