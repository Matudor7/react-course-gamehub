import useGames from "../../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import GameCardContainer from "../GameCardContainer";

function GameGrid() {
  const { data, error, isLoading } = useGames();
  const skeletonCount = 10;
  const skeletons = Array.from(
    { length: skeletonCount },
    (_, index) => index + 1,
  );
  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        gap={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
