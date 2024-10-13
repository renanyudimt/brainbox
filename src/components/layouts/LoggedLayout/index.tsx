import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import ChevronLeft from "@src/assets/icons/light/chevron-left.svg";
import EllipsisSvg from "@src/assets/icons/light/ellipsis.svg";
import { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const LoggedLayout = () => {
  const { pathname } = useLocation();
  console.log(`pathname`, pathname);
  const getTitle = useMemo(() => {
    switch (pathname) {
      case "/health":
        return "Health";
      case "/profile":
        return "Profile";
      default:
        return pathname;
    }
  }, []);

  const showProfileButton = useMemo(() => {
    return true;
  }, []);

  return (
    <Flex
      minH="100vh"
      minW="100vw"
      _dark={{
        bg: "background.dark",
      }}
      _light={{
        bg: "#fff",
      }}
      justifyContent="center"
    >
      <Flex
        flexDir="column"
        gap={4}
        w="100%"
        maxW={{
          sm: "100%",
          md: "768px",
        }}
      >
        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          pt="46px"
          px="36px"
        >
          <Button
            variant="ghost"
            w="46px"
            h="46px"
            boxShadow="5.92px 11.84px 23.68px 0px #D3D1D84D"
            borderRadius={8}
            onClick={() => window.history.back()}
          >
            <Image src={ChevronLeft} alt="Menu" />
          </Button>
          <Text fontWeight="500" fontSize={22}>
            Health
          </Text>
          {showProfileButton && (
            <Link to="/profile">
              <Button variant="ghost">
                <Image src={EllipsisSvg} alt="Menu" />
              </Button>
            </Link>
          )}

          {!showProfileButton && <Box w="46px" />}
        </Flex>
        <Outlet />
      </Flex>
    </Flex>
  );
};
