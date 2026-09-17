import { create } from "zustand";

export const useZStore = create((set, get) => ({
  selectedAssets: { Hat: "Hat1", Hair: "Hair1", Eyes: "Eyes1", Mouth: "Mouth1", Brows: "Brows1", Nose: "Nose1", Top: "Top1", Bot: "Bot1" },

  active: "Hat",
  skinTone: "",
  visible: true,

  assetList: {
    Hat1: { category: "Hat", path: "/3D/category/Hat1.glb", color: "", scale: 1 },
    Hat3: { category: "Hat", path: "/3D/category/Hat3.glb", color: "", scale: 1 },
    Hat4: { category: "Hat", path: "/3D/category/Hat4.glb", color: "", scale: 1 },
    Hat5: { category: "Hat", path: "/3D/category/asset.glb", color: "", scale: 1 },
    Hat6: { category: "Hat", path: "/3D/category/asset.glb", color: "", scale: 1 },
    Hat7: { category: "Hat", path: "/3D/category/asset.glb", color: "", scale: 1 },
    Hair1: { category: "Hair", path: "/3D/category/asset.glb", color: "" },
    Eyes1: { category: "Eyes", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Mouth1: { category: "Mouth", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Brows1: { category: "Brows", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Nose1: { category: "Nose", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Top1: { category: "Top", path: "/3D/category/asset.glb", color: "" },
    Hat2: { category: "Hat", path: "/3D/category/asset.glb", color: "", scale: 1 },
    Hair2: { category: "Hair", path: "/3D/category/asset.glb", color: "" },
    Eyes2: { category: "Eyes", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Mouth2: { category: "Mouth", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Brows2: { category: "Brows", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Nose2: { category: "Nose", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Top2: { category: "Top", path: "/3D/category/asset.glb", color: "" },
    Bot1: { category: "Bot", path: "/3D/category/asset.glb", color: "" },
    Bot2: { category: "Bot", path: "/3D/category/asset.glb", color: "" },
  },

  setActiveTab: (tabName) => set({ active: tabName }),

  equipItem: (category, assetId) => {
    set((state) => ({ selectedAssets: { ...state.selectedAssets, [category]: assetId } }));
  },
}));
