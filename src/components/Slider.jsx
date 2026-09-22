import { useZStore } from "../store/useZStore";
export const Slider = () => {
  const selectedAssets = useZStore((state) => state.selectedAssets);
  const active = useZStore((state) => state.active);
  const assetList = useZStore((state) => state.assetList);
  const setScale = useZStore((state) => state.setScale);

  const handleChange = (event) => {
    setScale(event.target.value, selectedAssets[active]);
  };

  return (
    <>
      <div className="flex flex-row">
        {assetList[selectedAssets[active]]?.scale ? (
          <div>
            <input type="range" id="slider" label={"ss"} step="1" min="-20" max="20" name="slider" value={assetList[selectedAssets[active].scale]} onChange={handleChange} />
            <input type="number" id="slid" label={""} name="slid" value={assetList[selectedAssets[active]].scale} onChange={handleChange} />
          </div>
        ) : (
          "ff"
        )}
      </div>
      <div className="flex flex-row">{assetList[selectedAssets[active]?.scale]} hihihi</div>
      {/* <div className="flex flex-row">{assetList[selectedAssets[active]]?.path}</div>
      <div className="flex flex-row">{assetList[selectedAssets[active]]?.rotation}</div> */}
    </>
  );
};
<input type="range" id="slider" name="slider" min="0" max="10" onChange={() => {}} />;
