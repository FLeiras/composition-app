import { useQuery } from "@tanstack/vue-query";
import { getPokemonById } from "../helpers/get-pokemon-by-id";

export const usePokemon = (id: string) => {
  const { isLoading, isError, data:pokemon, error } = useQuery({
    queryKey: ["pokemons", id],
    queryFn: () => getPokemonById(id),
  });

  return {
    isLoading,
    isError,
    pokemon,
    errorMessage: error,
  };
};
