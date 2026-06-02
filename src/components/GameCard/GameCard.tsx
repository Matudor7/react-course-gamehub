import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import type { Game } from "../../hooks/useGames";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "../CriticScore";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root bg="card_border" borderWidth={0} overflow="hidden">
      <Card.Header p={0}>
        <Image src={game.background_image} objectFit="cover"></Image>
      </Card.Header>
      <Card.Body gap="2">
        <Card.Title>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between" mt="10px">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic} />
          </HStack>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
