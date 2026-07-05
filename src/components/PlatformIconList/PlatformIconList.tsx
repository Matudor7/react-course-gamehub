import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../../hooks/useGames";
import type { IconType } from "react-icons";
import { GrStatusUnknown } from "react-icons/gr";
import { SiAtari, SiCommodore, SiSega } from "react-icons/si";
import { TbLetterN } from "react-icons/tb";
import { GiGameConsole } from "react-icons/gi";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    sega: SiSega,
    neogeo: TbLetterN,
    "neo-geo": TbLetterN,
    atari: SiAtari,
    "commodore-amiga": SiCommodore,
    "3do": GiGameConsole,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug] || GrStatusUnknown}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
}

export default PlatformIconList;
