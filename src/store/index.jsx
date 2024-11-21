import { create } from "zustand";

const useFilterStore = create((set) => ({
  localidades: [],
  tipos: [],
  filters: {
    filter: "",
  },
  sortKey: { key: "", order: 1 },
  setFilters: (filters) => set({ filters }),
  setSortKey: (sortKey) => set({ sortKey }),
  setTypes: (tipos) => set({ tipos }),
  setLocalidades: (localidades) => set({ localidades }),
  cleanFilters: () =>
    set({
      filters: {
        filter: "",
      },
    }),
}));

export default useFilterStore;
