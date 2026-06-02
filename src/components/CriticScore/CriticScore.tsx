import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let textColor = score > 75 ? "green.200" : score > 60 ? "yellow.200" : "";
  let backgroundColor =
    score > 75 ? "green.800" : score > 60 ? "yellow.800" : "";

  return (
    <Badge fontSize="14px" color={textColor} bg={backgroundColor}>
      {score}
    </Badge>
  );
}

export default CriticScore;
