import { useZStore } from "../store/useZStore";
import { Asset } from "../components/Asset";
import { Tab } from "../components/Tab";
import { Slider } from "./Slider";

export const UI = () => {
  const selectedAssets = useZStore((state) => state.selectedAssets);
  const active = useZStore((state) => state.active);
  const assetList = useZStore((state) => state.assetList);
  return (
    <div id="uiContainer" className="dynamic-ui pointer-events-none absolute inset-0 z-10 items-center justify-between">
      <div id="assetMenu" className="dynamic-ui h-1/5 w-full bg-gray-900 sm:h-3/4 sm:w-1/3">
        <div id="assetBody" className="flex flex-5 flex-col bg-slate-300 px-2 pb-2 sm:rounded-r-lg">
          <div id="assetType" className="text-2xl font-bold text-slate-900 text-shadow-[-2px_2px_1px_rgba(0,0,0,0.25)]">
            {active}
          </div>
          <div id="assetButtons" className="flex h-full scrollbar-none flex-row gap-2 overflow-y-auto bg-green-500 sm:grid sm:grid-cols-2">
            {Object.entries(assetList).map(([current]) => (active === assetList[current].category ? <Asset className="sm:w-full" key={current} assetId={current} /> : ""))}
          </div>
        </div>
        <div id="assetTabs" className="flex scrollbar-none flex-row gap-2 overflow-auto sm:flex-col">
          {Object.entries(selectedAssets).map(([category]) => (
            <Tab key={category} name={category} />
          ))}
        </div>
      </div>
      <div className="pointer-events-auto flex w-full flex-col rounded-l-lg bg-slate-300 p-5 font-bold text-slate-900 sm:h-1/2 sm:w-1/4">
        <Slider />
      </div>
    </div>
  );
};
