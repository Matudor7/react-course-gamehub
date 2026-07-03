import { HStack, Image, Link, List, Text } from "@chakra-ui/react";
import useGenres, { type Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import GenreListSkeleton from "../GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  const skeletonCount = 10;
  const skeletons = Array.from(
    { length: skeletonCount },
    (_, index) => index + 1,
  );

  if (error) return null;

  return (
    <List.Root listStyleType="none">
      {isLoading &&
        skeletons.map((skeleton) => (
          <List.Item key={skeleton}>
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
            {genre.id === selectedGenre?.id ? (
              <Text fontSize="lg" fontWeight="bold">
                {genre.name}
              </Text>
            ) : (
              <Link
                color="text"
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
              >
                {genre.name}
              </Link>
            )}
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
}

export default GenreList;
