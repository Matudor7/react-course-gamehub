import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root bg="skeleton" borderWidth={0}>
      <Card.Header p={0}>
        <Skeleton bg="card_border" height="200px" />
      </Card.Header>
      <Card.Body gap="2">
        <Card.Title>
          <SkeletonText bg="card_border" noOfLines={2} />
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
