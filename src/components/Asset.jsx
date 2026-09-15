export function Asset({ assetId }) {
  return (
    <>
      <button className="pointer-events-auto flex aspect-square rounded-lg bg-slate-600" onClick={() => console.log(assetId)}>
        Click me
      </button>
    </>
  );
}
