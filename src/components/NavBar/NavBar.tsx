import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/icon.png";

interface Props {
  onDarkmodeClick: () => void;
}

function NavBar({ onDarkmodeClick }: Props) {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>MIIM Inc.</Text>
      <Box margin="auto"></Box>
      <Button colorPalette="teal" onClick={onDarkmodeClick}>
        Dark Mode
      </Button>
    </HStack>
  );
}

export default NavBar;
