import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListaPokemon.css';

const baseURL = "https://pokeapi.co/api/v2/pokemon";

function ListaPokemon() {
    const [pokemonList, setPokemonList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const response = await axios.get(baseURL);
                setPokemonList(response.data.results);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
            }
        }

        fetchPokemon();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPokemonList = pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return ( <
        div className = "ListaPokemon" >
        <
        h1 > Pokémon List < /h1> <
        div className = "search-bar" >
        <
        input type = "text"
        placeholder = "Buscar Pokémon..."
        value = { searchTerm }
        onChange = { handleSearchChange }
        className = "search-input" /
        >
        <
        /
        div > <
        div className = "card-container" > {
            filteredPokemonList.map((pokemon, index) => ( <
                Card key = { index }
                url = { pokemon.url }
                name = { pokemon.name }
                />
            ))
        } <
        /div> < /
        div >
    );
}

function Card({ url, name }) {
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

    return ( <
            div className = "card" >
            <
            h2 > { name } < /h2> {
            pokemonData && ( <
                div className = "pokemon-details" >
                <
                div className = "sprite" >
                <
                img src = { pokemonData.sprites.front_default }
                alt = "Sprite Front" / >
                <
                /div> <
                div className = "details" >
                <
                p > ID: { pokemonData.id } < /p> <
                p > Nombre: { pokemonData.name } < /p> <
                p > Peso: { pokemonData.weight } < /p> <
                p > Altura: { pokemonData.height } < /p> < /
                div > <
                /div>
            )
        } <
        /div>
);
}

export default ListaPokemon;