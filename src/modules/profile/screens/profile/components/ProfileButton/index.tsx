import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ChevronRightLight from "@src/assets/icons/light/chevron-right.svg";
import ChevronRightDark from "@src/assets/icons/dark/chevron-right.svg";

export const ProfileButton = ({
  icon,
  title,
  onClick,
}: {
  onClick?: () => void;
  icon: string;
  title: string;
}) => {
  const chevronRight = useColorModeValue(ChevronRightLight, ChevronRightDark);
  return (
    <Flex
      onClick={onClick}
      alignItems="center"
      as={Button}
      variant="ghost"
      p={12}
      justifyContent="space-between"
    >
      <Flex gap={8} align="center">
        <Box>
          <Image src={icon} w="32px" h="32px" />
        </Box>
        <Text fontSize={18} fontWeight={500}>
          {title}
        </Text>
      </Flex>
      <Box>
        <Image src={chevronRight} w="24px" h="24px" />
      </Box>
    </Flex>
  );
};
