import { Card, HStack, Image, Text } from "@chakra-ui/react";
import type { Game } from "../../hooks/useGames";
import PlatformIconList from "../PlatformIconList";
import CriticScore from "../CriticScore";
import getCroppedImageUrl from "../../services/image-url";
import { IoMdStar } from "react-icons/io";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root bg="card_border" borderWidth={0}>
      <Card.Header p={0}>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          objectFit="cover"
        ></Image>
      </Card.Header>
      <Card.Body gap="2">
        <Card.Title>
          <HStack justifyContent="space-between" mb="10px">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic} />
          </HStack>
          <Text fontSize="2xl">{game.name}</Text>
          <HStack mt={2}>
            {Array.from({ length: game.rating_top }).map((_, i) => (
              <IoMdStar key={i} />
            ))}
          </HStack>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
