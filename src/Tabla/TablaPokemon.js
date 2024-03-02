import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TablaPokemon.css'; // Importa tu archivo de estilos CSS

function App() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
                setPokemonList(response.data.results);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        }

        fetchPokemon();
    }, []);

    const handleDelete = (index) => {
        const updatedList = [...pokemonList.slice(0, index), ...pokemonList.slice(index + 1)];
        setPokemonList(updatedList);
    };

    return ( <
        div className = "App" >
        <
        h1 > Pokémon List < /h1> <
        div className = "table-container" >
        <
        table className = "pokemon-table" >
        <
        thead >
        <
        tr >
        <
        th > ID < /th> <
        th > Nombre < /th> <
        th > Peso < /th> <
        th > Altura < /th> <
        th > Sprite Front < /th> <
        th > Sprite Back < /th> <
        th > Eliminar < /th> < /
        tr > <
        /thead> <
        tbody > {
            pokemonList.map((pokemon, index) => ( <
                tr key = { index } >
                <
                td > { index + 1 } < /td> <
                td > { pokemon.name } < /td> <
                PokemonDetails url = { pokemon.url }
                /> <
                td >
                <
                button onClick = {
                    () => handleDelete(index)
                } > Eliminar < /button> < /
                td > <
                /tr>
            ))
        } <
        /tbody> < /
        table > <
        /div> < /
        div >
    );
}

function PokemonDetails({ url }) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const response = await axios.get(url);
                setPokemonData(response.data);
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        }

        fetchPokemonData();
    }, [url]);

    if (!pokemonData) {
        return ( <
            >
            <
            td > Loading... < /td> <
            td > Loading... < /td> <
            td > Loading... < /td> <
            td > Loading... < /td> <
            td > Loading... < /td> < /
            >
        );
    }

    return ( <
        >
        <
        td > { pokemonData.weight } < /td> <
        td > { pokemonData.height } < /td> <
        td >
        <
        img src = { pokemonData.sprites.front_default }
        alt = "Sprite Front" / >
        <
        /td> <
        td >
        <
        img src = { pokemonData.sprites.back_default }
        alt = "Sprite Back" / >
        <
        /td> < /
        >
    );
}

export default App;