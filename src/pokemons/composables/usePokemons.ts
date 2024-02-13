import { computed, onMounted, ref, watchEffect } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getPokemons } from "@/pokemons/helpers/get-pokemons";

export const usePokemons = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error,
  } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
    retry: 0,
  });

  watchEffect(()=>{
    // console.log('isLoading', isLoading.value);
  })

  return {
    pokemons,
    isLoading,
    isError,
    error,

    count: computed(() => pokemons.value?.length),
  };
};
