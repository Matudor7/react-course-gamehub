import { Box, HStack, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

function GenreListSkeleton() {
  return (
    <Stack>
      <HStack paddingY="10px">
        <Box bg="skeleton" boxSize="32px" borderRadius={8}>
          <Skeleton bg="card_border"></Skeleton>
        </Box>
        <SkeletonText bg="card_border" noOfLines={1} />
      </HStack>
    </Stack>
  );
}

export default GenreListSkeleton;
