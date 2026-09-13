import React from 'react'
import { useZStore } from '../store/useZStore'

export function Asset({ assetId }) {
    const { assetList } = useZStore()
    return (
        <>
            <button className="pointer-events-auto flex aspect-square w-full rounded-lg bg-slate-600 py-0.5 pr-0.5" onClick={() => console.log(assetId)}>
                Click me
            </button>
        </>
    )
}
