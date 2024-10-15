import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import LockLight from "@src/assets/icons/light/lock.svg";
import LockDark from "@src/assets/icons/dark/lock.svg";
import ChevronRightLight from "@src/assets/icons/light/chevron-right.svg";
import ChevronRightDark from "@src/assets/icons/dark/chevron-right.svg";

export const AccountSecurityButton = () => {
  const chevronRight = useColorModeValue(ChevronRightLight, ChevronRightDark);
  const lockImage = useColorModeValue(LockLight, LockDark);
  const progressValue = 70;

  return (
    <Flex
      as={Button}
      variant="ghost"
      p={16}
      px={12}
      justifyContent="space-between"
    >
      <Flex gap={8} align="center">
        <Box>
          <Image src={lockImage} w="32px" h="32px" />
        </Box>
        <Flex flexDir="column" gap={4}>
          <Text fontSize={18} fontWeight={500}>
            Account Security
          </Text>
          <Box
            w="100%"
            h="8px"
            borderRadius="24px"
            _dark={{
              bg: "gray.600",
            }}
            _light={{
              bg: "gray.400",
            }}
            position="relative"
            overflow="hidden"
          >
            <Box
              _dark={{
                bg: "white",
              }}
              _light={{
                bg: "gray.950",
              }}
              h="100%"
              w={`${progressValue}%`}
              borderRadius="24px"
              bg="green.500"
              position="absolute"
              top="0"
              left="0"
            />
          </Box>
          <Text
            fontWeight={500}
            color="gray.500"
            textAlign="left"
            fontSize="16px"
          >
            Excellent
          </Text>
        </Flex>
      </Flex>
      <Box>
        <Image src={chevronRight} w="24px" h="24px" />
      </Box>
    </Flex>
  );
};
