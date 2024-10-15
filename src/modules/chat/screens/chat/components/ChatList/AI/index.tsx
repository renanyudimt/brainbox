import { Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import BrainBoxSvg from "@src/assets/icons/light/brainbox.svg";
import CopySvg from "@src/assets/icons/light/copy.svg";
import ShareSvg from "@src/assets/icons/light/share.svg";
import { useCallback } from "react";

export const AI = ({ message }: { message: string }) => {
  const toast = useToast();

  const handleCopy = useCallback(
    (message: string) => {
      const toast = useToast();

      if (!navigator.clipboard) {
        toast({
          title: "Clipboard not supported (HTTPS required)",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }

      navigator.clipboard
        .writeText(message)
        .then(() => {
          toast({
            title: "Text copied to clipboard",
            status: "info",
            duration: 1000,
            isClosable: true,
          });
        })
        .catch((error) => {
          toast({
            title: "Failed to copy text",
            description: error.message,
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        });
    },
    [message, toast]
  );

  return (
    <Flex
      px={9}
      py="12px"
      flexDir="column"
      gap={5}
      _light={{
        background: `gray.50`,
      }}
      _dark={{
        background: `gray.900`,
      }}
      w="100%"
    >
      <Flex justifyContent="space-between" alignItems="center" gap={3}>
        <Image src={BrainBoxSvg} w={37} h={37} />
        <Flex align="center" gap={2}>
          <Button textAlign={"center"} variant="unstyled" onClick={handleCopy}>
            <Image src={CopySvg} w="14px" h="14px" margin="auto" />
          </Button>
          <Button variant="unstyled">
            <Image src={ShareSvg} w="14px" h="14px" margin="auto" />
          </Button>
        </Flex>
      </Flex>
      <Flex flex={1} alignItems="center">
        <Text
          fontSize={["14px", "16px"]}
          fontWeight={400}
          _dark={{
            color: `gray.450`,
          }}
          _light={{
            color: `gray.850`,
          }}
          dangerouslySetInnerHTML={{
            __html: message,
          }}
        />
      </Flex>
    </Flex>
  );
};
