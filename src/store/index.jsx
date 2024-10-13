import { create } from "zustand";

const useFilterStore = create((set) => ({
  filters: {},
  setFilters: (newFilters) => set({ filters: newFilters }),
}));

export default useFilterStore;
