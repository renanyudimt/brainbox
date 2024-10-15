import { useGeminiStore } from "../useGeminiStore";
import run from "@src/libs/google-gemine";

export const useGemini = () => {
  const {
    historyPrompts,
    recentPrompt,
    setResultData,
    resultData,
    setLoading,
    setRecentPrompt,
    setHistoryPrompts,
  } = useGeminiStore();

  const delayPara = (index: number, nextWord: string) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  // Função para encapsular a lógica de negócio
  const processPromptResponse = async (prompt: string) => {
    const history = historyPrompts
      .map((item) => [
        {
          role: "user",
          parts: [
            {
              text: item.prompt,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: item.result,
            },
          ],
        },
      ])
      .flat();
    setLoading(true);

    const response = await run(prompt, history);
    setLoading(false);

    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i] + "</br>";
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
  };

  const onSendPrompt = async (prompt: string) => {
    if (resultData) {
      setHistoryPrompts((prev) => [
        { prompt: recentPrompt, result: resultData },
        ...prev,
      ]);
    }

    setResultData("");
    setRecentPrompt(prompt);
    processPromptResponse(prompt);
  };

  const regeneratePrompt = (prompt: string) => {
    setResultData("");
    processPromptResponse(prompt);
  };

  return {
    onSendPrompt,
    regeneratePrompt,
  };
};
