import React, {useState, useContext} from "react";
import { DefaultContext } from '../contexts/defaultContext'

export const HomePage = () => {

    const defContetxt = useContext(DefaultContext);
    const [count, setCount] = useState(0);

    return (
        <>
            <div> Bem vindo a home {defContetxt}</div>
            <div><h1>Contador { count }</h1></div>
            <button onClick={() => { setCount(count + 1) }}>Somar</button>
            <button onClick={() => { setCount(count - 1) }}>Subtrair</button>
        </>
    )
}

export default HomePage;