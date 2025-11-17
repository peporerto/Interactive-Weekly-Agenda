import { create } from "zustand";

interface UIState {
  loading: boolean;
  setLoading: (value: boolean) => void;
  modalOpen: boolean;
  toggleModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value }),
  modalOpen: false,
  toggleModal: () => set((state) => ({ modalOpen: !state.modalOpen })),
}));
