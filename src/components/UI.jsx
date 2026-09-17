import { useZStore } from "../store/useZStore";
import { Asset } from "../components/Asset";
import { Tab } from "../components/Tab";
import { Slider } from "./Slider";

export const UI = () => {
  const selectedAssets = useZStore((state) => state.selectedAssets);
  const active = useZStore((state) => state.active);
  const assetList = useZStore((state) => state.assetList);
  return (
    <div id="uiContainer" className="pointer-events-none absolute inset-0 z-10 flex flex-col-reverse items-center justify-between lg:flex-row">
      <div id="assetMenu" className="flex h-1/4 w-full flex-col-reverse lg:h-full lg:w-1/3 lg:flex-row">
        <div id="assetBody" className="flex h-full flex-col bg-slate-300 p-2 lg:w-3/5">
          <div id="assetType" className="pb-1 text-2xl">
            {active}
          </div>
          <div id="assetButtons" className="pointer-events-auto flex h-full touch-pan-x scrollbar-none flex-row gap-2 overflow-x-scroll rounded-xl lg:touch-pan-y lg:flex-col lg:overflow-y-scroll">
            {Object.entries(assetList).map(([current]) => (active === assetList[current].category ? <Asset key={current} assetId={current} /> : ""))}
          </div>
        </div>
        <div id="assetTabs" className="flex h-1/4 flex-row items-end justify-around px-5 lg:h-auto lg:w-1/6 lg:flex-col lg:items-start lg:px-0 lg:py-5">
          {Object.entries(selectedAssets).map(([category]) => (
            <Tab key={category} name={category} />
          ))}
        </div>
      </div>
      <div className="pointer-events-auto flex w-full flex-col bg-slate-300 p-5 font-bold text-slate-900 lg:w-1/4">
        <Slider />
        <div>{assetList[selectedAssets[active]]?.scale}</div>
      </div>
    </div>
  );
};
