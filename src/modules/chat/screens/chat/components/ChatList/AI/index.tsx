import { Button, Flex, Image, Text, useToast } from "@chakra-ui/react";
import BrainBoxSvg from "@src/assets/icons/light/brainbox.svg";
import CopySvg from "@src/assets/icons/light/copy.svg";
import ShareSvg from "@src/assets/icons/light/share.svg";

export const AI = ({ message }: { message: string }) => {
  const toast = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(message).then(() => {
      toast({
        title: "Texto copiado.",
        description: "O texto foi copiado para a área de transferência.",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    });
  };

  return (
    <Flex
      px={9}
      py="12px"
      flexDir="column"
      gap={5}
      background="#F7F7F8"
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
          color="#2f2f2f"
          dangerouslySetInnerHTML={{
            __html: message,
          }}
        />
      </Flex>
    </Flex>
  );
};
