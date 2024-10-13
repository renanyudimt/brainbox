type HistoricPrompt = {
  prompt: string;
  result: string;
};

export type GeminiStore = {
  recentPrompt: string;
  historyPrompts: HistoricPrompt[];
  loading: boolean;
  resultData: string;
  setRecentPrompt: (prompt: string) => void;
  setHistoryPrompts: (
    prompts:
      | HistoricPrompt[]
      | ((oldPrompts: HistoricPrompt[]) => HistoricPrompt[])
  ) => void;
  setResultData: (data: string | ((oldData: string) => string)) => void;

  setLoading: (loading: boolean) => void;
};
