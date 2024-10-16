import { useCallback } from "react";
import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import SendSvg from "@src/assets/icons/light/send.svg";
import { useGemini } from "@src/libs/google-gemine/hooks/useGemini";
import { useGeminiStore } from "@src/libs/google-gemine/hooks/useGeminiStore";
import { ChatInformations } from "./components/ChatInformations";
import { ChatList } from "./components/ChatList";

type FormData = {
  prompt: string;
};

export const ChatPage = () => {
  const { onSendPrompt } = useGemini();
  const { recentPrompt, setRecentPrompt, resultData } = useGeminiStore();
  const { control, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = useCallback(
    ({ prompt }: FormData) => {
      setRecentPrompt(prompt);
      onSendPrompt(prompt);
      reset({
        prompt: "",
      });
    },
    [onSendPrompt, recentPrompt, reset, resultData, setRecentPrompt]
  );

  return (
    <Flex flexDir="column" flex={1}>
      <Flex flex={1} position="relative" overflow="auto">
        <Flex w="100%" h="100%" top="0" left="0" position="absolute">
          <Flex flexDir="column" w="100%">
            {!!recentPrompt ? <ChatList /> : <ChatInformations />}
          </Flex>
        </Flex>
      </Flex>

      <Flex alignItems="flex-end" px="34px" pb="30px" pt={2}>
        <InputGroup h="48px">
          <Controller
            name="prompt"
            control={control}
            defaultValue=""
            rules={{ required: "Prompt is required" }}
            render={({ field }) => (
              <Input
                {...field}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(onSubmit)();
                  }
                }}
                placeholder="Send a message"
                h="inherit"
                size="lg"
                name="prompt"
                _light={{
                  backgroundColor: "white",
                  boxShadow: "0px 4px 77px 0px gray.75",
                }}
                _dark={{
                  backgroundColor: "gray.850",
                }}
                pr={14}
              />
            )}
          />

          <InputRightElement
            alignItems="center"
            display="flex"
            h="inherit"
            w="32px"
          >
            <Button onClick={handleSubmit(onSubmit)} variant="unstyled">
              <Image src={SendSvg} alt="Send" h="24px" w="24px" mr={3} />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
};

export default ChatPage;
