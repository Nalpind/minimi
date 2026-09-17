import { create } from "zustand";

export const useZStore = create((set, get) => ({
  selectedAssets: { hat: "hat1", hair: "hair1", eyes: "eyes1", mouth: "mouth1", brows: "brows1", nose: "nose1", top: "top1", bot: "bot1" },

  active: "hat",
  skinTone: "",

  assetList: {
    hat1: { category: "hat", path: "/3D/category/hat1.glb", color: "", scale: 1 },
    hat3: { category: "hat", path: "/3D/category/hat3.glb", color: "", scale: 1 },
    hat4: { category: "hat", path: "/3D/category/hat4.glb", color: "", scale: 1 },
    hat5: { category: "hat", path: "/3D/category/asset.glb", color: "", scale: 1 },
    hat6: { category: "hat", path: "/3D/category/asset.glb", color: "", scale: 1 },
    hat7: { category: "hat", path: "/3D/category/asset.glb", color: "", scale: 1 },
    hair1: { category: "hair", path: "/3D/category/asset.glb", color: "" },
    eyes1: { category: "eyes", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    mouth1: { category: "mouth", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    brows1: { category: "brows", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    nose1: { category: "nose", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    top1: { category: "top", path: "/3D/category/asset.glb", color: "" },
    hat2: { category: "hat", path: "/3D/category/asset.glb", color: "", scale: 1 },
    hair2: { category: "hair", path: "/3D/category/asset.glb", color: "" },
    eyes2: { category: "eyes", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    mouth2: { category: "mouth", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    brows2: { category: "brows", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    nose2: { category: "nose", path: "/3D/category/asset.glb", color: "", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    top2: { category: "top", path: "/3D/category/asset.glb", color: "" },
    bot1: { category: "bot", path: "/3D/category/asset.glb", color: "" },
    bot2: { category: "bot", path: "/3D/category/asset.glb", color: "" },
  },

  setActiveTab: (tabName) => set({ active: tabName }),

  equipItem: (category, assetId) => {
    set((state) => ({ selectedAssets: { ...state.selectedAssets, [category]: assetId } }));
  },
}));
