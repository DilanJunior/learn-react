import { useState } from 'react';


const Button = () => {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1);

    }

    return (
        <>
        <button onClick={increment}>Incrementar</button>
        <p>Contador: {count}</p>
            
            
        </>
    )
};


export default Button;