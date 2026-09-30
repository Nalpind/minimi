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
        className={`${visible ? "" : "lg:-translate-x-full"} relative flex h-1/4 w-full flex-col-reverse transition-transform duration-300 ease-[cubic-bezier(0.75,0.25,0.5,1.25)] lg:h-full lg:w-1/4 lg:flex-row`}
      >
        <div id="leftColorFill" className="absolute -left-1/2 h-full w-1/2 bg-slate-300" />
        <div id="assetBody" className="flex h-full w-full flex-col bg-slate-300 p-5">
          <div id="menuHeader" className="flex w-full justify-between pb-2 text-2xl font-bold lg:text-4xl">
            {active}
            <button id="closeMenuButton" onClick={() => handleClick(!visible)} className="pointer-events-auto invisible h-auto w-fit bg-slate-700 lg:visible">
              {"close"}
            </button>
          </div>
          <div
            id="assetButtons"
            className="pointer-events-auto flex h-full touch-pan-x scrollbar-none flex-row gap-5 overflow-x-scroll overflow-y-hidden rounded-xl lg:touch-pan-y lg:flex-col lg:gap-8 lg:overflow-y-scroll lg:p-3"
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
      <div className="pointer-events-auto flex h-1/4 w-full flex-col bg-slate-300 p-2 font-bold text-slate-900 lg:h-1/3 lg:w-1/4">
        <Slider />
      </div>
    </div>
  );
};
