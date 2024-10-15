import { Button, Flex, Image, Text } from "@chakra-ui/react";
import RobotAvatar from "@src/assets/icons/light/robot-avatar.svg";
import EditMessage from "@src/assets/icons/light/edit.svg";

export const Me = ({ message }: { message: string }) => {
  return (
    <Flex px={9} py="26px" flexDir="column" gap={5} w="100%">
      <Flex justifyContent="space-between" alignItems="center" gap={6}>
        <Flex align="center">
          <Image src={RobotAvatar} w={37} h={37} />
        </Flex>
        <Flex flex={1} alignItems="center">
          <Text fontSize={["14px", "16px"]} fontWeight={400}>
            {message}
          </Text>
        </Flex>
        <Button variant="unstyled">
          <Image src={EditMessage} margin="auto" w="14px" h="14px" />
        </Button>
      </Flex>
    </Flex>
  );
};
