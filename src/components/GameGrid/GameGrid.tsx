import useGames from "../../hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "../GameCard";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap="40px"
        p="10px"
        justifyItems="center"
      >
        {isLoading && <Spinner size="sm" />}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
