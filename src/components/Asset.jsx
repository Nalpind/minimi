import { useZStore } from "../store/useZStore";
export function Asset({ assetId }) {
  const selectedAssets = useZStore((state) => state.selectedAssets);
  const active = useZStore((state) => state.active);
  const equipItem = useZStore((state) => state.equipItem);
  const assetList = useZStore((state) => state.assetList);

  const handleClick = (active, assetId) => {
    equipItem(active, assetId);
  };

  return (
    <>
      <button
        className={`pointer-events-auto aspect-square rounded-lg 2xl:h-auto ${selectedAssets[active] === assetId ? "bg-slate-600" : "bg-slate-400"}`}
        onClick={() => handleClick(active, assetId)}
      >
        Bye
      </button>
    </>
  );
}
