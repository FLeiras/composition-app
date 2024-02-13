<script setup lang="ts">
import router from "@/router";
import type { Pokemon } from "../interfaces";

interface Props {
  pokemons: Pokemon;
}

const props = defineProps<Props>();

const goTo = () => {
  router.push({
    name: 'pokemon-id',
    params: { id: props.pokemons.id }
  });
};
</script>
<template>
  <div class="pokemon-card" @click="goTo">
    <img :src="pokemons.frontSprite" :alt="pokemons.name" />
    <h3>{{ pokemons.name }}</h3>
  </div>
</template>

<style scoped>
.pokemon-card {
  background-color: black;
  border-top-left-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

h3 {
  color: white;
}

img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgb(255, 255, 255);
  transition: all 0.5s;
}

img:hover {
  box-shadow: 0px 2px 10px rgb(255, 255, 255);
  transition: all 0.5s;
}
</style>
