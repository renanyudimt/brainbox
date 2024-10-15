import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ChevronLeftLight from "@src/assets/icons/light/chevron-left.svg";
import ChevronLeftDark from "@src/assets/icons/dark/chevron-left.svg";

import EllipsisSvgLight from "@src/assets/icons/light/ellipsis.svg";
import EllipsisSvgDark from "@src/assets/icons/dark/ellipsis.svg";

import { useMemo } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

export const LoggedLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const getTitle = useMemo(() => {
    switch (pathname) {
      case "/chat":
        return "Health";
      case "/profile":
        return "Profile";
      case "/profile/preferences":
        return "Preferences";

      case "/profile/edit-information":
        return "Edit Information";

      case "/profile/invite-friend":
        return "Invite Friend";
      default:
        return pathname;
    }
  }, [pathname]);

  const showProfileButton = useMemo(() => {
    return !pathname.includes("/profile");
  }, [pathname]);

  const chevronLeftImage = useColorModeValue(ChevronLeftLight, ChevronLeftDark);
  const ellipsisImage = useColorModeValue(EllipsisSvgLight, EllipsisSvgDark);

  return (
    <Flex
      minH="100vh"
      minW="100vw"
      _dark={{
        bg: "gray.950",
      }}
      _light={{
        bg: "white",
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
            _light={{
              boxShadow: "5.92px 11.84px 23.68px 0px #D3D1D84D",
            }}
            _dark={{
              background: `gray.850`,
            }}
            borderRadius={8}
            onClick={() => navigate(-1)}
          >
            <Image src={chevronLeftImage} />
          </Button>
          <Text fontWeight="500" fontSize={22}>
            {getTitle}
          </Text>
          {showProfileButton && (
            <Link to="/profile">
              <Button variant="ghost">
                <Image src={ellipsisImage} alt="Menu" />
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
