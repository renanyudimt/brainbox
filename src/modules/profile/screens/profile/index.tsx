import { Box, Button, Flex, Image, Progress, Text } from "@chakra-ui/react";
import SettingsSvg from "@src/assets/icons/light/settings.svg";
import ChevronRightSvg from "@src/assets/icons/light/chevron-right.svg";
import RobotImage from "@src/assets/robot-image.jpeg";
import LockSvg from "@src/assets/icons/light/lock.svg";
import SupportSvg from "@src/assets/icons/light/help.svg";
import LogoutSvg from "@src/assets/icons/light/logout.svg";

export const ProfilePage = () => {
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
          <Text fontWeight="bold" fontSize="27px" color="rgba(33, 33, 33, 1)">
            Tom Hillson
          </Text>
          <Text fontWeight={500} fontSize={14} color="rgba(50, 49, 66, 1)">
            Tomhill@mail.com
          </Text>
        </Flex>
      </Flex>

      <Flex flexDir="column" gap={3} flex={1} p={4}>
        <Flex
          alignItems="center"
          as={Button}
          variant="ghost"
          p={12}
          justifyContent="space-between"
        >
          <Flex gap={8} align="center">
            <Box>
              <Image src={SettingsSvg} w="32px" h="32px" />
            </Box>
            <Text fontSize={18} fontWeight={500}>
              Preferences
            </Text>
          </Flex>
          <Box>
            <Image src={ChevronRightSvg} w="24px" h="24px" />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          as={Button}
          variant="ghost"
          py={16}
          px={12}
          justifyContent="space-between"
        >
          <Flex gap={8}>
            <Box>
              <Image src={LockSvg} w="32px" h="32px" />
            </Box>
            <Flex flexDir="column" gap={4}>
              <Text fontSize={18} fontWeight={500}>
                Account Security
              </Text>
              <Progress
                borderRadius="24px"
                value={70}
                colorScheme="green"
                background="rgba(167, 167, 171, 1)"
              />
              <Text
                fontWeight={500}
                color="rgba(167, 167, 171, 1)"
                textAlign="left"
                fontSize="16px"
              >
                Excellent
              </Text>
            </Flex>
          </Flex>
          <Box>
            <Image src={ChevronRightSvg} w="24px" h="24px" />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          as={Button}
          variant="ghost"
          p={12}
          justifyContent="space-between"
        >
          <Flex gap={8} align="center">
            <Box>
              <Image src={SupportSvg} w="32px" h="32px" />
            </Box>
            <Text fontSize={18} fontWeight={500}>
              Customer Support
            </Text>
          </Flex>
          <Box>
            <Image src={ChevronRightSvg} w="24px" h="24px" />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          as={Button}
          variant="ghost"
          p={12}
          justifyContent="space-between"
        >
          <Flex gap={8} align="center">
            <Box>
              <Image src={LogoutSvg} w="32px" h="32px" />
            </Box>
            <Text fontSize={18} fontWeight={500}>
              Logout
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
