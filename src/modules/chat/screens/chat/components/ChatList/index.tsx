import { Button, Flex, Image } from "@chakra-ui/react";
import { Me } from "./Me";
import { AI } from "./AI";
import { useGeminiStore } from "@src/libs/google-gemine/hooks/useGeminiStore";
import { Fragment } from "react/jsx-runtime";
import { useMemo } from "react";
import RegenerateSvg from "@src/assets/icons/light/regenerate.svg";

export const ChatList = () => {
  const { resultData, recentPrompt, loading, historyPrompts } =
    useGeminiStore();

  const memoizedElements = useMemo(() => {
    return (
      <>
        {resultData && !loading && (
          <Flex align="center" justify="center" pb="26px" pt="44px">
            <Button h="48px" w="180px" variant="outline">
              <Image src={RegenerateSvg} w={6} h={6} mr={6} />
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
