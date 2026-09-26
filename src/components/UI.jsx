import { useZStore } from "../store/useZStore";
import { Asset } from "../components/Asset";
import { Tab } from "../components/Tab";
import { Slider } from "./Slider";

export const UI = () => {
  const selectedAssets = useZStore((state) => state.selectedAssets);
  const active = useZStore((state) => state.active);
  const assetList = useZStore((state) => state.assetList);
  const visible = useZStore((state) => state.visible);
  const setVisible = useZStore((state) => state.setVisible);

  const handleClick = (vis) => {
    setVisible(vis);
  };
  return (
    <div id="uiContainer" className="pointer-events-none absolute inset-0 z-10 flex flex-col-reverse items-center justify-between lg:flex-row">
      <div
        id="assetMenu"
        className={`relative flex h-1/4 w-full transition-transform duration-300 ease-[cubic-bezier(0.75,0.25,0.5,1.25)] ${visible ? "" : "lg:-translate-x-full"} flex-col-reverse lg:h-full lg:w-1/4 lg:flex-row`}
      >
        <div className="absolute -left-1/2 h-full w-1/2 bg-slate-300" />
        <div id="assetBody" className="flex h-full w-full flex-col bg-slate-300 p-5">
          <div id="assetType" className="flex w-full justify-between pb-3 text-2xl font-bold lg:text-4xl">
            {active}
            <div>{assetList[selectedAssets[active]]?.scale}</div>

            <button onClick={() => handleClick(!visible)} className="pointer-events-auto invisible h-auto w-fit bg-slate-700 lg:visible">
              {"<"}
            </button>
          </div>
          <div
            id="assetButtons"
            className="pointer-events-auto flex h-full touch-pan-x scrollbar-none flex-row gap-5 overflow-x-scroll rounded-xl lg:touch-pan-y lg:flex-col lg:gap-8 lg:overflow-y-scroll lg:p-3"
          >
            {Object.entries(assetList).map(([current]) => (active === assetList[current].category ? <Asset key={current} assetId={current} /> : ""))}
          </div>
        </div>
        <div id="assetTabs" className="absolute -top-1/4 flex h-1/4 w-full flex-row items-end justify-center gap-1 lg:top-auto lg:-right-1/5 lg:h-full lg:w-1/5 lg:flex-col lg:items-start lg:gap-5">
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
