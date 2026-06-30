import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import GenreListSkeleton from "../GenreListSkeleton";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  const skeletonCount = 10;
  const skeletons = Array.from(
    { length: skeletonCount },
    (_, index) => index + 1,
  );

  if (error) return null;

  return (
    <List.Root>
      {isLoading &&
        skeletons.map((skeleton) => (
          <List.Item>
            <GenreListSkeleton></GenreListSkeleton>
          </List.Item>
        ))}
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
