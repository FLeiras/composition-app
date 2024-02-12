<script setup lang="ts">
import { usePokemons } from "@/pokemons/composables/usePokemons";
import PokemonCardList from "../components/PokemonCardList.vue";

const { isLoading, pokemons, count, isError, error } = usePokemons();
</script>

<template>
  <h1 v-if="isLoading">Cargando...</h1>

  <div v-else-if="isError">
    {{ error }}
  </div>

  <div v-else>
    <h1 v-if="count === 0 || count === 1">
      Pokemon List - ({{ `${count + " " + "Pokémon"}` }})
    </h1>
    <h1 v-else>Pokemon List - ({{ `${count + " " + "Pokémons"}` }})</h1>

    <PokemonCardList :pokemons="pokemons ?? []" />
  </div>
</template>
