import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/icon.png";
import ColourModeSwitch from "../ColourModeSwitch";

function NavBar() {
  return (
    <HStack>
      <Box
        boxSize="60px"
        overflow="hidden"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={logo}></Image>
      </Box>
      <Text>MITM Inc.</Text>
      <Box margin="auto"></Box>
      <ColourModeSwitch></ColourModeSwitch>
    </HStack>
  );
}

export default NavBar;
