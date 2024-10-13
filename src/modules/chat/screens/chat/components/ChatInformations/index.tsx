import { Flex, Text } from "@chakra-ui/react";
import { Fragment } from "react";

export const ChatInformations = () => {
  const instructions = [
    "Remembers what user said \n\n earlier in the conversation",
    "Allows user to provide.\n\n follow-up corrections With Ai",
    "Limited knowledge of world\n\n and events after 2021",
    "May occasionally generate\n\nincorrect information",
    "May occasionally produce harmful\n\ninstructions or biased content",
  ];

  return (
    <>
      <Flex justifyContent="center" align="center">
        <Text fontWeight="600" fontSize="40px" color="#757474" my="50px">
          BrainBox
        </Text>
      </Flex>
      <Flex flexDir="column" gap={4} px="34px" flex={1}>
        {instructions.map((item, index) => (
          <Flex
            align="center"
            justify="center"
            key={index}
            borderRadius={8}
            w="100%"
            py={9}
            px={12}
            bg="#F7F7F8"
          >
            <Text
              color="#A0A0A5"
              textAlign="center"
              fontWeight={400}
              fontSize={14}
            >
              {item.split("\n\n").map((part, i) => (
                <Fragment key={i}>
                  {part}
                  {i < item.split("\n\n").length - 1 && <br />}
                </Fragment>
              ))}
            </Text>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
