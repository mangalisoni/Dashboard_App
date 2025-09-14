import { create } from "zustand";
import data from "../data/widgets.json";

const useDashboardStore = create((set, get) => ({
  categories: data,
  searchQuery: "",

  addWidget: (categoryId, widget) => {
    set({
      categories: get().categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, widgets: [...cat.widgets, widget] }
          : cat
      ),
    });
  },

  removeWidget: (categoryId, widgetId) => {
    set({
      categories: get().categories.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              widgets: cat.widgets.filter((w) => w.id !== widgetId),
            }
          : cat
      ),
    });
  },

  setSearchQuery: (query) => set({ searchQuery: query }),
}));

export default useDashboardStore;
