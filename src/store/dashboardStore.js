import { create } from "zustand";
import dashboardData from "../data/dashboardData.json"; // <-- correct path

export const useDashboardStore = create((set) => ({
  categories: dashboardData.categories,

  addWidget: (categoryId, widget) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, widgets: [...cat.widgets, { ...widget, id: Date.now() }] }
          : cat
      )
    })),

  removeWidget: (categoryId, widgetId) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, widgets: cat.widgets.filter((w) => w.id !== widgetId) }
          : cat
      )
    }))
}));
