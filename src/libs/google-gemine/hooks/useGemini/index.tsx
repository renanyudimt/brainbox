import { useGeminiStore } from "../useGeminiStore";
import run from "@src/libs/google-gemine";

export const useGemini = () => {
  const {
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

  const onSendPrompt = async (prompt: string) => {
    if (resultData) {
      setHistoryPrompts((prev) => [
        { prompt: recentPrompt, result: resultData },
        ...prev,
      ]);
    }

    setResultData("");
    setRecentPrompt(prompt);
    setLoading(true);

    const response = await run(prompt);

    let responseArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        if (responseArray[i].includes("{") || responseArray[i].includes("<")) {
          newResponse += `<pre style=" background-color: #333; color: #f5f5f5; padding: 10px; border-radius: 5px; word-wrap: break-word; max-width: 100%; overflow-wrap: break-word;"">${responseArray[i]}</pre>`;
        } else {
          newResponse += responseArray[i] + "</br>";
        }
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
    setLoading(false);
  };

  return {
    onSendPrompt,
  };
};
