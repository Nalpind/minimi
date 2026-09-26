import { create } from "zustand";

export const useZStore = create((set) => ({
  selectedAssets: { Hat: "Hat1", Hair: "Hair1", Brows: "Brows1", Eyes: "Eyes1", Nose: "Nose1", Mouth: "Mouth1", Top: "Top1", Bot: "Bot1" },

  active: "Hat",
  skinTone: "",
  visible: true,

  assetList: {
    Hat1: { category: "Hat", path: "/3D/category/Hat1.glb", color: "#fffff", scale: 1 },
    Hat3: { category: "Hat", path: "/3D/category/Hat3.glb", color: "#fffff", scale: 1 },
    Hat4: { category: "Hat", path: "/3D/category/Hat4.glb", color: "#fffff", scale: 1 },
    Hat5: { category: "Hat", path: "/3D/category/asset.glb", color: "#fffff", scale: 1 },
    Hat6: { category: "Hat", path: "/3D/category/asset.glb", color: "#fffff", scale: 1 },
    Hat7: { category: "Hat", path: "/3D/category/asset.glb", color: "#fffff", scale: 1 },
    Hat2: { category: "Hat", path: "/3D/category/asset.glb", color: "#fffff", scale: 1 },
    Hair1: { category: "Hair", path: "/3D/category/asset.glb", color: "#fffff" },
    Hair2: { category: "Hair", path: "/3D/category/asset.glb", color: "#fffff" },
    Eyes1: { category: "Eyes", path: "/3D/category/asset.glb", color: "#fffff", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Eyes2: { category: "Eyes", path: "/3D/category/asset.glb", color: "#fffff", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Mouth1: { category: "Mouth", path: "/3D/category/asset.glb", color: "#fffff", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Mouth2: { category: "Mouth", path: "/3D/category/asset.glb", color: "#fffff", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Brows1: { category: "Brows", path: "/3D/category/asset.glb", color: "#fffff", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Brows2: { category: "Brows", path: "/3D/category/asset.glb", color: "#fffff", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Nose1: { category: "Nose", path: "/3D/category/asset.glb", color: "#fffff", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Nose2: { category: "Nose", path: "/3D/category/asset.glb", color: "#fffff", scale: 1, rotation: 0, position: { x: 0, y: 0, z: 0 } },
    Top1: { category: "Top", path: "/3D/category/asset.glb", color: "#fffff" },
    Top2: { category: "Top", path: "/3D/category/asset.glb", color: "#fffff" },
    Bot1: { category: "Bot", path: "/3D/category/asset.glb", color: "#fffff" },
    Bot2: { category: "Bot", path: "/3D/category/asset.glb", color: "#fffff" },
  },

  setActiveTab: (tabName) => set(() => ({ active: tabName })),
  setVisible: (bool) => set(() => ({ visible: bool })),

  setScale: (newScale, assetId) => {
    set((state) => ({ assetList: { ...state.assetList, [assetId]: { ...state.assetList[assetId], scale: newScale } } }));
  },
  setColor: (newColor, assetId) => {
    set((state) => ({ assetList: { ...state.assetList, [assetId]: { ...state.assetList[assetId], color: newColor } } }));
  },
  setRotation: (newRotation, assetId) => {
    set((state) => ({ assetList: { ...state.assetList, [assetId]: { ...state.assetList[assetId], rotation: newRotation } } }));
  },
  setPosition: ({ x: xVal, y: yVal, z: zVal }, assetId) => {
    set((state) => ({ assetList: { ...state.assetList, [assetId]: { ...state.assetList[assetId], position: { x: xVal, y: yVal, z: zVal } } } }));
  },

  equipItem: (category, assetId) => {
    set((state) => ({ selectedAssets: { ...state.selectedAssets, [category]: assetId } }));
  },
}));
