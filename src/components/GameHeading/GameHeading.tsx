import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const platform = gameQuery.platform ? gameQuery.platform.name : "";
  const genre = gameQuery.genre ? gameQuery.genre.name : "";
  const heading = `${platform} ${genre} Games`;
  return (
    <Heading as="h1" fontSize="4xl" marginY={5}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
