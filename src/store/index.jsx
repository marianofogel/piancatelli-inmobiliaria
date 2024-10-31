import { create } from "zustand";

const useFilterStore = create((set) => ({
  filters: {
    address: "",
    type: "",
    minPrice: "",
    maxPrice: "",
  },
  sortKey: { key: "", order: 1 },
  setFilters: (filters) => set({ filters }),
  setSortKey: (sortKey) => set({ sortKey }),
  cleanFilters: () =>
    set({
      filters: {
        address: "",
        type: "",
        minPrice: "",
        maxPrice: "",
      },
    }),
}));

export default useFilterStore;
