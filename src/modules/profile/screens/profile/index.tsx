import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import SettingsLight from "@src/assets/icons/light/settings.svg";
import SettingsDark from "@src/assets/icons/dark/settings.svg";

import HelpLight from "@src/assets/icons/light/help.svg";
import HelpDark from "@src/assets/icons/dark/help.svg";
import LogoutLight from "@src/assets/icons/light/logout.svg";
import LogoutDark from "@src/assets/icons/dark/logout.svg";
import RobotImage from "@src/assets/robot-image.jpeg";

import { ProfileButton } from "./components/ProfileButton";
import { useNavigate } from "react-router-dom";
import { AccountSecurityButton } from "./components/ProfileButton/AccountSecurity";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const settingsImage = useColorModeValue(SettingsLight, SettingsDark);
  const helpImage = useColorModeValue(HelpLight, HelpDark);
  const logoutImage = useColorModeValue(LogoutLight, LogoutDark);

  return (
    <Flex flexDir="column" flex={1} justifyContent="center" gap={8}>
      <Flex flexDir="column" gap={6} align="center" w="100%">
        <Box mt="28px" position="relative">
          <Image w="112px" h="112px" src={RobotImage} borderRadius="50%" />
          <Box
            w="22px"
            h="22px"
            position="absolute"
            right={0}
            bottom={2}
            borderWidth={4}
            borderColor="white"
            borderStyle="solid"
            borderRadius="50%"
            bgColor="green.500"
          />
        </Box>
        <Flex flexDir="column" alignItems="center">
          <Text fontWeight="bold" fontSize="27px">
            Tom Hillson
          </Text>
          <Text fontWeight={500} fontSize={14} color="gray.700">
            Tomhill@mail.com
          </Text>
        </Flex>
      </Flex>

      <Flex flexDir="column" gap={3} flex={1} p={4}>
        <ProfileButton
          icon={settingsImage}
          title="Preferences"
          onClick={() => navigate(`/profile/preferences`)}
        />
        <AccountSecurityButton />

        <ProfileButton icon={helpImage} title="Customer Support" />
        <ProfileButton icon={logoutImage} title="Logout" />
      </Flex>
    </Flex>
  );
};
