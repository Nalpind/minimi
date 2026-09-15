import { useZStore } from "../store/useZStore";
import { Asset } from "../components/Asset";
import { Tab } from "../components/Tab";
import { Slider } from "./Slider";

export const UI = () => {
  const selectedAssets = useZStore((state) => state.selectedAssets);
  const active = useZStore((state) => state.active);
  const assetList = useZStore((state) => state.assetList);
  const { setAttribute } = useZStore();
  return (
    <div id="uiContainer" className="pointer-events-none absolute inset-0 z-10 flex flex-col-reverse items-center justify-between sm:flex-row">
      <div id="assetMenu" className="flex h-1/4 w-full grow-0 flex-col-reverse sm:h-1/2 sm:w-1/4 sm:flex-row">
        <div id="assetBody" className="flex flex-4 flex-col bg-slate-300 p-2 sm:rounded-r-lg md:flex-5 lg:flex-7">
          <div id="assetType" className="pb-2 text-2xl">
            {active}
          </div>
          <div
            id="assetButtons"
            className="pointer-events-auto flex flex-1 touch-pan-x scrollbar-none flex-row gap-2 overflow-x-scroll rounded-lg sm:grid sm:touch-pan-y sm:auto-rows-min sm:overflow-y-scroll lg:grid-cols-2"
          >
            {Object.entries(assetList).map(([current]) => (active === assetList[current].category ? <Asset key={current} assetId={current} /> : ""))}
          </div>
        </div>
        <div id="assetTabs" className="flex flex-1 flex-row justify-center gap-2 sm:flex-col">
          {Object.entries(selectedAssets).map(([category]) => (
            <Tab key={category} name={category} />
          ))}
        </div>
      </div>
      <div className="pointer-events-auto flex w-full flex-col bg-slate-300 p-5 font-bold text-slate-900 sm:w-1/4">
        <Slider />
        <div>{assetList[selectedAssets[active]].path}</div>
      </div>
    </div>
  );
};
