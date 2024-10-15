import { Button, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { Me } from "./Me";
import { AI } from "./AI";
import { useGeminiStore } from "@src/libs/google-gemine/hooks/useGeminiStore";
import { Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import RegenerateLight from "@src/assets/icons/light/regenerate.svg";
import RegenerateDark from "@src/assets/icons/dark/regenerate.svg";
import { useGemini } from "@src/libs/google-gemine/hooks/useGemini";

export const ChatList = () => {
  const { resultData, recentPrompt, loading, historyPrompts } =
    useGeminiStore();
  const { regeneratePrompt } = useGemini();

  const regenerateImage = useColorModeValue(RegenerateLight, RegenerateDark);

  const handleRegenerate = () => regeneratePrompt(recentPrompt);

  const memoizedElements = useMemo(() => {
    return (
      <>
        {resultData && !loading && (
          <Flex
            align="center"
            justify="center"
            pb="26px"
            pt="44px"
            onClick={handleRegenerate}
          >
            <Button
              h="48px"
              w="180px"
              variant="unstyled"
              display="flex"
              alignItems="center"
              borderRadius="12px"
              border="1px solid"
              size="lg"
              _light={{
                borderColor: "gray.300",
              }}
              _dark={{
                borderColor: "gray.700",
                bg: "gray.900",
              }}
            >
              <Image src={regenerateImage} w={6} h={6} mr={6} />
              Regenerate Response
            </Button>
          </Flex>
        )}
        {resultData && <AI message={resultData} />}
        {recentPrompt && <Me message={recentPrompt} />}
        {historyPrompts.map((item, index) => (
          <Fragment key={index}>
            <AI message={item.result} />
            <Me message={item.prompt} />
          </Fragment>
        ))}
      </>
    );
  }, [resultData, loading, recentPrompt, historyPrompts]);

  return (
    <Flex
      position="relative"
      flex={1}
      overflowY="auto"
      style={{
        overflowAnchor: `auto`,
      }}
      flexDir="column-reverse"
      alignItems="center"
      pt={2}
    >
      {memoizedElements}
    </Flex>
  );
};
