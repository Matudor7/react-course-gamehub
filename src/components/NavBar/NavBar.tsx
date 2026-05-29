import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/icon.png";

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>MIIM Inc.</Text>
    </HStack>
  );
}

export default NavBar;
