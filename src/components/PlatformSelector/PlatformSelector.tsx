import { Button, Menu, MenuTrigger, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
import type { Platform } from "../../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatforms();
  //For some reason, the parent platforms API endpoint also supports some non-parent consoles
  //Thus they need to be manually filtered out.
  const ALLOWED_PARENT_PLATFORMS = [
    "pc",
    "playstation",
    "xbox",
    "nintendo",
    "ios",
    "android",
    "linux",
    "mac",
    "web",
  ];

  const filteredData = data.filter((p) =>
    ALLOWED_PARENT_PLATFORMS.includes(p.slug),
  );

  if (error) return null;
  return (
    <Menu.Root>
      <MenuTrigger asChild>
        <Button color="text" bg="card_border">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content bg="bg">
            {filteredData.map((parent_platform) => (
              <Menu.Item
                key={parent_platform.id}
                value={parent_platform.slug}
                _hover={{ bg: "card_border" }}
                onClick={() => onSelectPlatform(parent_platform)}
              >
                {parent_platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
