import { Button, Menu, MenuTrigger, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";

function PlatformSelector() {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu.Root>
      <MenuTrigger asChild>
        <Button color="text" bg="card_border">
          Platforms <BsChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content bg="bg">
            {data.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.id.toString()}
                _hover={{ bg: "card_border" }}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
