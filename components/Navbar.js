import React from 'react';
import iconHome from './img/logo.png';
import iconSql from './img/sql.png'
import './css/navbar.css';

export default function Navbar(){
    return (
        <>
            <button className= "icon-home">
                <a href="index.html">
                    <img 
                    src={iconHome}
                    className="img-nav"
                    />SHOP
                </a>
            </button>
            <button><a href="php/cadastrar.php">Cadastrar</a></button>
            <button><a href="php/listar.php">Listar</a></button>
            <button><a href="php/alterar.php">Alterar</a></button>
            <button><a href="php/remover.php">Remover</a></button> 
            <button><a href="php/consultar.php">Consultar</a></button>
            <button className="icon-sql">
                <a target="blank_" href="http://localhost/phpmyadmin/">
                    <img 
                    className="img-sql" 
                    src={iconSql} 
                    />
                </a>
            </button>
        </>
    )
}
