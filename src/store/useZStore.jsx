import { create } from "zustand";

export const useZStore = create((set, get) => ({
  selectedAssets: { hat: "hat1", hair: "hair1", eyes: "eyes1", mouth: "mouth1", brows: "brows1", nose: "nose1", top: "top1", bot: "bot1" },

  active: "hat",
  skinTone: "",

  assetList: {
    hat1: { category: "hat", path: 0, color: "", scale: "" },
    hat3: { category: "hat", path: "", color: "", scale: "" },
    hat4: { category: "hat", path: "", color: "", scale: "" },
    hat5: { category: "hat", path: "", color: "", scale: "" },
    hat6: { category: "hat", path: "", color: "", scale: "" },
    hat7: { category: "hat", path: "", color: "", scale: "" },
    hair1: { category: "hair", path: "", color: "" },
    eyes1: { category: "eyes", path: "", color: "", scale: "", rotation: "", position: "" },
    mouth1: { category: "mouth", path: "", color: "", scale: "", rotation: "", position: "" },
    brows1: { category: "brows", path: "", color: "", scale: "", rotation: "", position: "" },
    nose1: { category: "nose", path: "", color: "", scale: "", rotation: "", position: "" },
    top1: { category: "top", path: "", color: "" },
    hat2: { category: "hat", path: "", color: "", scale: "" },
    hair2: { category: "hair", path: "", color: "" },
    eyes2: { category: "eyes", path: "", color: "", scale: "", rotation: "", position: "" },
    mouth2: { category: "mouth", path: "", color: "", scale: "", rotation: "", position: "" },
    brows2: { category: "brows", path: "", color: "", scale: "", rotation: "", position: "" },
    nose2: { category: "nose", path: "", color: "", scale: "", rotation: "", position: "" },
    top2: { category: "top", path: "", color: "" },
  },

  setActiveTab: (tabName) => set({ active: tabName }),

  equipItem: (category, assetId) => {
    set((state) => ({ selectedAssets: { ...state.selectedAssets, [category]: assetId } }));
  },
}));
