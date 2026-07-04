import useGames from "../../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import GameCardContainer from "../GameCardContainer";
import type { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletonCount = 10;
  const skeletons = Array.from(
    { length: skeletonCount },
    (_, index) => index + 1,
  );
  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap={6}
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
