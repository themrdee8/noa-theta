import { create } from "zustand";

interface useProVersionStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProVersion = create<useProVersionStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
