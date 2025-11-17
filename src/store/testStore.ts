import { create } from "zustand";
import type { Test } from "@/types/test";

interface TestState {
  tests: Test[];
  selectedTest: Test | null;
  setTests: (tests: Test[]) => void;
  selectTest: (test: Test) => void;
}

export const useTestStore = create<TestState>((set) => ({
  tests: [],
  selectedTest: null,
  setTests: (tests) => set({ tests }),
  selectTest: (test) => set({ selectedTest: test }),
}));
