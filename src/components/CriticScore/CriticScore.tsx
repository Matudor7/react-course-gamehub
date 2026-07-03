import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let textColor = score
    ? score > 75
      ? "green.200"
      : score > 60
        ? "yellow.200"
        : "red.200"
    : "white.200";
  let backgroundColor = score
    ? score > 75
      ? "green.800"
      : score > 60
        ? "yellow.800"
        : "red.800"
    : "white.800";

  return (
    <Badge fontSize="14px" color={textColor} bg={backgroundColor}>
      {score ? score : "N/A"}
    </Badge>
  );
}

export default CriticScore;
