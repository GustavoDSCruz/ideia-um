import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import Navbar from '../components/Navbar';


export default function Home(){
    return(
        <>
        <Navbar />
        <h1>Home</h1>
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
