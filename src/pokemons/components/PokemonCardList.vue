<script setup lang="ts">
import type { Pokemon } from "../interfaces";
import PokemonCard from "./PokemonCard.vue";

interface Props {
  pokemons: Pokemon[];
}

const props = defineProps<Props>();
</script>
<template>
  <div class="card-list">
    <PokemonCard
    v-for="pokemon of props.pokemons"
    :key="pokemon.id"
    :pokemons="pokemon"
    />
  </div>
</template>

<style scoped>
.card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
