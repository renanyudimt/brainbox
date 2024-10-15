import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import LogoLight from "@src/assets/icons/light/logo.svg";
import LogoDark from "@src/assets/icons/dark/logo.svg";

import "./styles.css";

export const FullScreenLoader = () => {
  const logoImage = useColorModeValue(LogoLight, LogoDark);

  return (
    <Flex
      p={16}
      flexDir="column"
      justify="space-between"
      align="center"
      className="loader"
      _dark={{
        bg: "gray.950",
      }}
      _light={{
        bg: "white",
      }}
    >
      <Box />
      <Image alt="logo do makes" height={40} src={logoImage} width={192} />
      <Flex
        flexDir="column"
        align="center"
        bottom={0}
        left={0}
        justifySelf="flex-end"
      >
        <Text fontWeight="500" fontSize="36px">
          BrainBox
        </Text>
        <Text>Version 1.0</Text>
      </Flex>
    </Flex>
  );
};

export default FullScreenLoader;
