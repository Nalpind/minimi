import { useZStore } from "../store/useZStore";
import BotIcon from "../assets/icons/BotIcon";
import BrowsIcon from "../assets/icons/BrowsIcon";
import EyesIcon from "../assets/icons/EyesIcon";
import HairIcon from "../assets/icons/HairIcon";
import HatIcon from "../assets/icons/HatIcon";
import MouthIcon from "../assets/icons/MouthIcon";
import NoseIcon from "../assets/icons/NoseIcon";
import TopIcon from "../assets/icons/TopIcon";

export function Tab({ name }) {
  const setActiveTab = useZStore((state) => state.setActiveTab);
  const setVisible = useZStore((state) => state.setVisible);

  const active = useZStore((state) => state.active);

  const handleClick = (name) => {
    setActiveTab(name);
    setVisible(true);
  };

  function tabIcon(name) {
    switch (name) {
      case "Hat":
        return <HatIcon className="h-full w-full" />;
      case "Top":
        return <TopIcon className="h-full w-full" />;
      case "Hair":
        return <HairIcon className="h-full w-full" />;
      case "Brows":
        return <BrowsIcon className="h-full w-full" />;
      case "Eyes":
        return <EyesIcon className="h-full w-full" />;
      case "Nose":
        return <NoseIcon className="h-full w-full" />;
      case "Mouth":
        return <MouthIcon className="h-full w-full" />;
      case "Bot":
        return <BotIcon className="h-full w-full" />;
    }
  }

  return (
    <>
      <button
        onClick={() => handleClick(name)}
        className={`hover:animate-hovery animate-hovery-rev active:animate-clicky pointer-events-auto flex aspect-square origin-bottom items-baseline-last justify-center rounded-t-lg transition-transform lg:h-auto lg:origin-left lg:flex-col lg:items-baseline lg:justify-center lg:rounded-t-none lg:rounded-r-lg ${active === name ? "h-full bg-linear-to-b from-slate-500 to-slate-300 lg:w-full lg:bg-linear-to-l " : " h-[80%] bg-slate-500 lg:w-[80%]"}`}
      >
        <div className={`${active === name ? "rounded-t-md lg:rounded-t-none lg:rounded-r-md" : ""}`}>
          <div className="flex aspect-square items-center justify-center p-1">{tabIcon(name)}</div>
        </div>
      </button>
    </>
  );
}
