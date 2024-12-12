import { create } from "zustand";

const useFilterStore = create((set) => ({
  localidades: [],
  tipos: [],
  filters: {
    filter: "",
  },
  barrio: null,
  sortKey: { key: "", order: 1 },
  setFilters: (filters) => set({ filters }),
  setSortKey: (sortKey) => set({ sortKey }),
  setTypes: (tipos) => set({ tipos }),
  setLocalidades: (localidades) => set({ localidades }),
  setBarrio: (barrio) => set({ barrio }),
  cleanFilters: () =>
    set({
      filters: {
        filter: "",
      },
    }),
}));

export default useFilterStore;
