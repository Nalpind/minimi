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
        className={`active:animate-clicky hover:animate-hovery animate-hovery-rev pointer-events-auto z-10 aspect-square rounded-lg 2xl:h-auto ${selectedAssets[active] === assetId ? "bg-slate-600" : "bg-slate-400"}`}
        onClick={() => handleClick(active, assetId)}
      >
        {assetId}
        <div className="flex flex-row">
          <div>{assetList[assetId]?.scale}</div>
          <div>{assetList[assetId]?.color}</div>
          <div>{assetList[assetId]?.position?.x}</div>
          <div>{assetList[assetId]?.position?.y}</div>
          <div>{assetList[assetId]?.position?.z}</div>
        </div>
      </button>
    </>
  );
}
