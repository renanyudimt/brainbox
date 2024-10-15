import {
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import IllustrationLight from "@src/assets/icons/light/Illustration.svg";
import IllustrationDark from "@src/assets/icons/dark/Illustration.svg";
import CopyLight from "@src/assets/icons/light/copy-black.svg";
import CopyDark from "@src/assets/icons/dark/copy.svg";

const CODE = "BrainAiPartnerMR";

export const InviteFriendPage = () => {
  const IllustrationImage = useColorModeValue(
    IllustrationLight,
    IllustrationDark
  );
  const toast = useToast();

  const copyImage = useColorModeValue(CopyLight, CopyDark);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE).then(() => {
      toast({
        title: "Text copied to clipboard",
        status: "info",
        duration: 1000,
        isClosable: true,
      });
    });
  };

  return (
    <Flex flexDir="column" flex={1} gap={16} mt={32} align="center">
      <Image src={IllustrationImage} w="168px" h="246px" />
      <Flex flexDir="column" align="center">
        <Text fontSize="24px" fontWeight="bold">
          Refer A Friend
        </Text>
        <Text fontSize="16px" color="gray.700" textAlign="center">
          Share Your Promo Code & Get $3 <br /> For Each Friend
        </Text>
      </Flex>
      <Flex
        border="2px solid"
        borderRadius={15}
        bg="gray.950/10"
        gap={8}
        justifyContent="space-between"
        align="center"
        p={8}
      >
        <Text fontWeight={500}>{CODE}</Text>
        <Button variant="unstyled" onClick={handleCopy}>
          <Image src={copyImage} w="24px" h="24px" />
        </Button>
      </Flex>
    </Flex>
  );
};
