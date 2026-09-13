

export function Asset({ assetId }) {
    return (
        <>
            <button className="pointer-events-auto flex aspect-square w-full rounded-lg bg-slate-600 py-0.5 pr-0.5" onClick={() => console.log(assetId)}>
                Click me
            </button>
        </>
    )
}
