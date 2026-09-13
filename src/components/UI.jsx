import { useZStore } from "../store/useZStore";
import { Asset } from "../components/Asset";
import { Tab } from "../components/Tab";
import { useState } from "react";
import { Slider } from "./Slider";

export const UI = () => {
  const selectedAssets = useZStore((state) => state.selectedAssets);
  const active = useZStore((state) => state.active);
  const assetList = useZStore((state) => state.assetList);
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col-reverse items-center justify-between sm:flex-row">
      <div className="flex w-full flex-col-reverse sm:h-3/4 sm:w-1/4 sm:flex-row">
        <div className="flex flex-4 flex-col items-center rounded-r-lg bg-slate-300">
          <div className="flex h-2/18 w-full flex-row items-center">
            <div className="pl-5 text-3xl font-bold text-slate-900 text-shadow-[-2px_2px_1px_rgba(0,0,0,0.25)]">
              {active}
            </div>
          </div>
          <div className="flex w-full scrollbar-none grid-cols-1 flex-row justify-between gap-2 overflow-auto px-3 sm:grid sm:grid-cols-2">
            {Object.entries(assetList).map(([current]) =>
              active === assetList[current].category ? (
                <Asset key={current} assetId={current} />
              ) : (
                ""
              ),
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-row gap-2 sm:flex-col">
          <div className="h-2/18" />
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
