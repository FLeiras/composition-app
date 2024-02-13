<script setup lang="ts">
import store from "@/store/pokemon.store";
import PokemonCardList from "@/pokemons/components/PokemonCardList.vue";
import { getPokemons } from "../helpers/get-pokemons";
import { useQuery } from "@tanstack/vue-query";

useQuery({
  queryKey: ["pokemons"],
  queryFn: getPokemons,
  select(data) {
    store.loadedPokemons(data);
  },
});
</script>

<template>
  <h1 v-if="store.pokemons.isLoading">Cargando...</h1>

  <div v-else-if="store.pokemons.hasError">
    {{ store.pokemons.errorMessage }}
  </div>

  <div v-else>
    <h1 v-if="store.pokemons.count === 1">
      Pokemon List Native - ({{ `${store.pokemons.count + " " + "Pokémon"}` }})
    </h1>
    <h1 v-else>
      Pokemon List - ({{ `${store.pokemons.count + " " + "Pokémons"}` }})
    </h1>

    <PokemonCardList :pokemons="store.pokemons.list" />
  </div>
</template>
