<script setup lang="ts">
import router from "@/router";
import type { Pokemon } from "../interfaces";
import { useQueryClient } from "@tanstack/vue-query";
import { getPokemonById } from "../helpers/get-pokemon-by-id";

interface Props {
  pokemons: Pokemon;
}

const props = defineProps<Props>();
const queryClient = useQueryClient();

const goTo = () => {
  router.push({
    name: "pokemon-id",
    params: { id: props.pokemons.id },
  });
};

const preFetchPokemon =  () => {

  const id = props.pokemons.id.toString();

  queryClient.prefetchQuery({
    queryKey: ["pokemons", id ],
    queryFn: () => getPokemonById(id),
  });
};
</script>

<template>
  <div class="pokemon-card" @click="goTo" @mouseenter="preFetchPokemon">
    <img :src="pokemons.frontSprite" :alt="pokemons.name" />
    <h3>{{ pokemons.name }}</h3>
  </div>
</template>

<style scoped>
.pokemon-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
}

img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
}
</style>
