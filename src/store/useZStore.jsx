import { create } from 'zustand'

export const useZStore = create((set, get) => ({
    selectedAssets: {
        hat: 'hat1',
        hair: 'hair1',
        eyes: 'eyes1',
        mouth: 'mouth1',
        brows: 'brows1',
        nose: 'nose1',
    },

    active: 'hat',

    assetList: {
        hat1: {
            category: 'hat',
            path: 'path/to/hat1.glb',
            color: 'ffffff',
        },
        hat2: {
            category: 'hat',
            path: 'path/to/hat2.glb',
            color: '0000ff',
        },
        hat3: {
            category: 'hat',
            path: 'path/to/hat1.glb',
            color: 'ffffff',
        },
        hat4: {
            category: 'hat',
            path: 'path/to/hat2.glb',
            color: '0000ff',
        },
        hat5: {
            category: 'hat',
            path: 'path/to/hat1.glb',
            color: 'ffffff',
        },
        hat6: {
            category: 'hat',
            path: 'path/to/hat2.glb',
            color: '0000ff',
        },
        hat7: {
            category: 'hat',
            path: 'path/to/hat1.glb',
            color: 'ffffff',
        },
        hat8: {
            category: 'hat',
            path: 'path/to/hat2.glb',
            color: '0000ff',
        },
        hair1: {
            category: 'hair',
            path: 'path/to/hair1.glb',
            color: 'ff0000',
        },
        hair2: {
            category: 'hair',
            path: 'path/to/hair2.glb',
            color: '00ff00',
        },
        eyes1: {
            category: 'eyes',
            path: 'path/to/eyes1.glb',
            color: '000000',
        },
        eyes2: {
            category: 'eyes',
            path: 'path/to/eyes2.glb',
            color: 'ffff00',
        },
        mouth1: {
            category: 'mouth',
            path: 'path/to/mouth1.gl',
            color: 'ff00ff',
        },
        mouth2: {
            category: 'mouth',
            path: 'path/to/mouth2.glb',
            color: '00ffff',
        },
        brows1: {
            category: 'brows',
            path: 'path/to/brows1.glb',
            color: 'ffffff',
        },
        brows2: {
            category: 'brows',
            path: 'path/to/brows2.glb',
            color: '000000',
        },
        nose1: {
            category: 'nose',
            hat: '',
            path: 'path/to/nose1.glb',
            color: 'ff0000',
        },
        nose2: {
            category: 'nose',
            path: 'path/to/nose2.glb',
            color: '00ff00',
        },
    },

    setActiveTab: (tabName) => set({ active: tabName }),

    equipItem: (category, assetId) => {
        set((state) => ({
            selectedAssets: { ...state.selectedAssets, [category]: assetId },
        }))
    },
}))
