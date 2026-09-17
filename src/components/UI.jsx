import { useZStore } from "../store/useZStore";
import { Asset } from "../components/Asset";
import { Tab } from "../components/Tab";
import { Slider } from "./Slider";
import { useState } from "react";

export const UI = () => {
  const selectedAssets = useZStore((state) => state.selectedAssets);
  const active = useZStore((state) => state.active);
  const assetList = useZStore((state) => state.assetList);
  const [shown, toggleShown] = useState(true);
  return (
    <div id="uiContainer" className="pointer-events-none absolute inset-0 z-10 flex flex-col-reverse items-center justify-between md:flex-row">
      <div id="assetMenu" className="flex h-1/4 w-full flex-col-reverse md:h-1/2 md:w-1/4 md:flex-row">
        <div id="assetBody" className={`${shown ? "flex" : "hidden"} flex h-full flex-col bg-slate-300 p-2 md:w-3/5 md:rounded-r-lg`}>
          <div id="assetType" className="text-2xl">
            {active}
          </div>
          <div
            id="assetButtons"
            className="pointer-events-auto flex h-full touch-pan-x scrollbar-none flex-row gap-2 overflow-x-scroll rounded-lg bg-green-400 p-2 md:grid md:touch-pan-y md:overflow-y-scroll 2xl:grid-cols-2"
          >
            {Object.entries(assetList).map(([current]) => (active === assetList[current].category ? <Asset key={current} assetId={current} /> : ""))}
          </div>
        </div>
        <div id="assetTabs" className="flex flex-row justify-around gap-2 bg-blue-400 px-5 md:flex-col md:px-0 md:py-5">
          {Object.entries(selectedAssets).map(([category]) => (
            <Tab key={category} name={category} />
          ))}
        </div>
      </div>
      <div className="pointer-events-auto flex w-full flex-col bg-slate-300 p-5 font-bold text-slate-900 md:w-1/4">
        <Slider />
        <div>{assetList[selectedAssets[active]].path}</div>
      </div>
    </div>
  );
};
