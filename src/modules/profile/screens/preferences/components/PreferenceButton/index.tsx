import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export const PreferenceButton = ({
  title,
  subtitle,
  icon,
  onClick,
}: {
  title: string;
  subtitle: string;
  icon: string;
  onClick?: () => void;
}) => (
  <Flex
    as={Button}
    variant="ghost"
    p={12}
    justifyContent="space-between"
    onClick={onClick}
  >
    <Flex gap={8} align="center">
      <Box>
        <Image src={icon} w="24px" h="24px" />
      </Box>
      <Flex flexDir="column" gap={4}>
        <Text fontSize={16} fontWeight={600} textAlign="left">
          {title}
        </Text>

        <Text
          fontWeight={400}
          color="gray.600"
          textAlign="left"
          fontSize="14px"
        >
          {subtitle}
        </Text>
      </Flex>
    </Flex>
  </Flex>
);
