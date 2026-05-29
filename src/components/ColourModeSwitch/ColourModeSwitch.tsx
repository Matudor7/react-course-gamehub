import { HStack, Icon, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { FaSun, FaMoon } from "react-icons/fa";

function ColourModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root
        colorPalette="purple"
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control bg={colorMode === "dark" ? "purple.500" : "blue.400"}>
          <Switch.Thumb />
          <Switch.Indicator
            fallback={<Icon as={FaSun} color="yellow.400"></Icon>}
          >
            <Icon as={colorMode === "dark" ? FaMoon : FaSun}></Icon>
          </Switch.Indicator>
        </Switch.Control>
        <Switch.Label />
      </Switch.Root>
      <Text>
        {" "}
        {colorMode === "dark"
          ? "Switch to Light Mode"
          : "Switch to Dark Mode"}{" "}
      </Text>
    </HStack>
  );
}

export default ColourModeSwitch;
