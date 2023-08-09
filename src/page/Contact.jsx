import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

function Contact() {
  const [pokemonList, setPokemonList] = useState([]);

  const handleGetDataPokemon = () => {
      axios
          .get("https://pokeapi.co/api/v2/pokemon")
          .then((response) => {
              setPokemonList(response.data.results);
              console.log(response);
          })
          .catch((error) => {
              console.error("Error fetching data:", error);
          });
  };
  useEffect(() => {
      handleGetDataPokemon();
      console.log('test')
  }, []);

  return (
      <div>
          {pokemonList?.map((value) => (
              <Card title={value?.name} key={value?.name}>
                  Url {value?.url}
              </Card>
          ))}
      </div>
  );
}

export default Contact