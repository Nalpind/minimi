import { useZStore } from "../store/useZStore";
import { PiStarFill } from "react-icons/pi";
import { IconContext } from "react-icons";

export function Tab({ name }) {
  const setActiveTab = useZStore((state) => state.setActiveTab);
  const active = useZStore((state) => state.active);
  const handleClick = (name) => {
    setActiveTab(name);
  };
  return (
    <>
      <button onClick={() => handleClick(name)} className={`pointer-events-auto aspect-square shrink ${active === name ? "bg-linear-to-l from-slate-600 to-slate-300" : "inset-shadow bg-slate-500 "}`}>
        <div className={` ${active === name ? "bg-slate-300" : ""}`}>
          <IconContext.Provider value={{ size: "1em", color: `${active === name ? "blue" : ""}` }}>
            <div className="flex aspect-square items-center justify-center">{<PiStarFill />}</div>
          </IconContext.Provider>
        </div>
      </button>
    </>
  );
}
