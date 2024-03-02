import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardPokemon.css';

function CardPokemon() {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
                setPokemonData(response.data);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        }

        fetchPokemonData();
    }, []);

    if (!pokemonData) {
        return <div > Loading... < /div>;
    }

    return ( <
        div className = "CardPokemon" >
        <
        h1 > { pokemonData.name } < /h1> <
        div className = "pokemon-card" >
        <
        div className = "pokemon-info" >
        <
        p className = "info-item" > ID: { pokemonData.id } < /p> <
        p className = "info-item" > Nombre: { pokemonData.name } < /p> < /
        div > <
        div className = "sprites" >
        <
        img className = "sprite-image"
        src = { pokemonData.sprites.front_default }
        alt = "Front Sprite" / >
        <
        img className = "sprite-image"
        src = { pokemonData.sprites.back_default }
        alt = "Back Sprite" / >
        <
        /div> <
        div className = "stats" >
        <
        p className = "info-item" > Peso: { pokemonData.weight } < /p> <
        p className = "info-item" > Altura: { pokemonData.height } < /p> < /
        div > <
        div className = "moves-card" >
        <
        h2 > Movimientos: < /h2> <
        div className = "moves" >
        <
        ul className = "moves-list" > {
            pokemonData.moves.map((move, index) => ( <
                li key = { index } > { move.move.name } < /li>
            ))
        } <
        /ul> < /
        div > <
        /div> < /
        div > <
        /div>
    );
}

export default CardPokemon;