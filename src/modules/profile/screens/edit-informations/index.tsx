import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import EditLight from "@src/assets/icons/light/edit.svg";
import EditDark from "@src/assets/icons/dark/edit.svg";
import UserOutlineLight from "@src/assets/icons/light/user-outline.svg";
import UserOutlineDark from "@src/assets/icons/dark/user-outline.svg";
import LockOutline from "@src/assets/icons/dark/lock-outline.svg";
import MailOutline from "@src/assets/icons/dark/mail-outline.svg";

export const EditInformationsPage = () => {
  const editImage = useColorModeValue(EditLight, EditDark);
  const userOutlineImage = useColorModeValue(UserOutlineLight, UserOutlineDark);
  return (
    <Flex flex={1} p={12} pt={36}>
      <Flex flexDir="column" gap={6} flex={1}>
        <InputGroup h="68px" alignItems="center">
          <InputLeftElement
            alignItems="center"
            display="flex"
            h="inherit"
            w="62px"
          >
            <Image src={userOutlineImage} h="21px" w="21px" />
          </InputLeftElement>
          <Input
            placeholder="FULL NAME"
            variant="unstyled"
            h="inherit"
            borderRadius={12}
            _light={{
              background: "gray.50",
            }}
            _dark={{
              background: "gray.850",
            }}
            pl="62px"
            pr="62px"
          />

          <InputRightElement
            alignItems="center"
            display="flex"
            h="inherit"
            w="62px"
          >
            <Button variant="unstyled">
              <Image src={editImage} h="21px" w="21px" />
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup h="68px" alignItems="center">
          <InputLeftElement
            alignItems="center"
            display="flex"
            h="inherit"
            w="62px"
          >
            <Image src={MailOutline} h="21px" w="21px" />
          </InputLeftElement>
          <Input
            placeholder="EMAIL"
            variant="unstyled"
            h="inherit"
            borderRadius={12}
            _light={{
              background: "gray.50",
            }}
            _dark={{
              background: "gray.850",
            }}
            pl="62px"
            pr="62px"
          />

          <InputRightElement
            alignItems="center"
            display="flex"
            h="inherit"
            w="62px"
          >
            <Button variant="unstyled">
              <Image src={editImage} h="21px" w="21px" />
            </Button>
          </InputRightElement>
        </InputGroup>
        <InputGroup h="68px" alignItems="center">
          <InputLeftElement
            alignItems="center"
            display="flex"
            h="inherit"
            w="62px"
          >
            <Image src={LockOutline} h="21px" w="21px" />
          </InputLeftElement>
          <Input
            placeholder="PASSWORD"
            variant="unstyled"
            h="inherit"
            borderRadius={12}
            _light={{
              background: "gray.50",
            }}
            _dark={{
              background: "gray.850",
            }}
            pl="62px"
            pr="62px"
          />

          <InputRightElement
            alignItems="center"
            display="flex"
            h="inherit"
            w="62px"
          >
            <Button variant="unstyled">
              <Image src={editImage} h="21px" w="21px" />
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          h="68px"
          variant="unstyled"
          borderRadius={14}
          fontSize={16}
          mt={16}
          _dark={{
            background: "gray.925",
          }}
          _light={{
            background: "gray.950",
            color: "white",
          }}
        >
          SAVE CHANGES
        </Button>
      </Flex>
    </Flex>
  );
};
