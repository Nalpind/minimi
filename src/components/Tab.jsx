import { useZStore } from "../store/useZStore";

export function Tab({ name }) {
  const setActiveTab = useZStore((state) => state.setActiveTab);
  const active = useZStore((state) => state.active);
  const handleClick = (name) => {
    setActiveTab(name);
  };
  return (
    <>
      <button
        onClick={() => handleClick(name)}
        className={`pointer-events-auto flex aspect-square items-baseline-last justify-center rounded-t-lg lg:h-auto lg:flex-col lg:items-baseline lg:justify-center lg:rounded-t-none lg:rounded-r-lg ${active === name ? "h-full bg-linear-to-b from-slate-500 to-slate-300 lg:w-full lg:bg-linear-to-l " : " h-[80%] bg-slate-500 lg:w-[80%]"}`}
      >
        <div className={` ${active === name ? "h-[90%] w-[80%] rounded-t-md bg-slate-300 lg:h-[80%] lg:w-[90%] lg:rounded-t-none lg:rounded-r-md" : ""}`}>
          <div className="flex aspect-square items-center justify-center p-1">hi</div>
        </div>
      </button>
    </>
  );
}
