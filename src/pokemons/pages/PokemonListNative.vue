<script setup lang="ts">
import store from "@/store/pokemon.store";
import PokemonCardList from "@/pokemons/components/PokemonCardList.vue";
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
