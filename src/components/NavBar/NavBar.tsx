import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/icon.png";
import ColourModeSwitch from "../ColourModeSwitch";
import SearchInput from "../SearchInput";

function NavBar() {
  return (
    <HStack padding="10px">
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
      <SearchInput></SearchInput>
      <ColourModeSwitch></ColourModeSwitch>
    </HStack>
  );
}

export default NavBar;
