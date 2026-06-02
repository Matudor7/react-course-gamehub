import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/icon.png";
import ColourModeSwitch from "../ColourModeSwitch";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>MITM Inc.</Text>
      <Box margin="auto"></Box>
      <ColourModeSwitch></ColourModeSwitch>
    </HStack>
  );
}

export default NavBar;
