type HistoricPrompt = {
  prompt: string;
  result: string;
};

export type GeminiStore = {
  recentPrompt: string;
  historyPrompts: HistoricPrompt[];
  loading: boolean;
  resultData: string;
  typing: boolean;
  toggleTyping: () => void;
  setTyping: (typing: boolean) => void;
  setRecentPrompt: (prompt: string) => void;
  setHistoryPrompts: (
    prompts:
      | HistoricPrompt[]
      | ((oldPrompts: HistoricPrompt[]) => HistoricPrompt[])
  ) => void;
  setResultData: (data: string | ((oldData: string) => string)) => void;

  setLoading: (loading: boolean) => void;
};
