import { create } from "zustand";
import { GeminiStore } from "./types";

export const useGeminiStore = create<GeminiStore>((set) => {
  return {
    recentPrompt: "",
    historyPrompts: [],
    loading: false,
    typing: false,
    resultData: "",
    toggleTyping: () => {
      set((state) => {
        return {
          typing: !state.typing,
        };
      });
    },
    setTyping: (typing: boolean) => {
      set({ typing });
    },
    setRecentPrompt: (recentPrompt: string) => {
      set({ recentPrompt });
    },
    setHistoryPrompts: (newPrompts) => {
      if (typeof newPrompts === "function") {
        set((state) => {
          return {
            historyPrompts: newPrompts(state.historyPrompts),
          };
        });
        return;
      }

      set({ historyPrompts: newPrompts });
    },
    setLoading: (loading: boolean) => {
      set({ loading });
    },
    setResultData: (newResultData) => {
      if (typeof newResultData === "function") {
        set((state) => {
          return {
            resultData: newResultData(state.resultData),
          };
        });
        return;
      }

      set({ resultData: newResultData });
    },
  };
});
