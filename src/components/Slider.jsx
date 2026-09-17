import { useZStore } from "../store/useZStore";
export const Slider = () => {
  const { selectedAssets, assetList, active } = useZStore(
    (state) => state.selectedAssets,
    (state) => state.assetList,
    (state) => state.active,
  );
  return (
    <>
      <div className="flex flex-row">
        <input type="range" id="slider" name="slider" min="0" max="10" onChange={() => {}} />
        <input onChange={() => {}} />
      </div>
    </>
  );
};
