import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu/Menu';
import ListaPokemon from './Lista/ListaPokemon';
import CardPokemon from './Card/CardPokemon';
import TablaPokemon from './Tabla/TablaPokemon';

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        Menu / >
        <
        Routes >
        <
        Route path = "/lista"
        element = { < ListaPokemon / > }
        /> <
        Route path = "/detalle"
        element = { < CardPokemon / > }
        /> <
        Route path = "/tabla"
        element = { < TablaPokemon / > }
        /> </Routes > <
        /div> < /
        Router >
    );
}

export default App;