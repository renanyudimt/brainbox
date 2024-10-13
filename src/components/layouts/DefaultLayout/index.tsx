import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Flex
      flexDir="column"
      minH="100vh"
      minW="100vw"
      _dark={{
        bg: "background.dark",
      }}
      _light={{
        bg: "background.light",
      }}
    >
      <Outlet />
    </Flex>
  );
};
