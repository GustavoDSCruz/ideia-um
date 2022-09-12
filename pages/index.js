import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';



export default function Home(){
    return(
        <>
        <p>Home</p>
        <Contador />
        </>
        )}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
