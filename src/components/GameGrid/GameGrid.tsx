import useGames from "../../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import GameCardContainer from "../GameCardContainer";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5];
  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap="40px"
        p="10px"
        justifyItems="center"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
