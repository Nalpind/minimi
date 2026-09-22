import { useZStore } from "../store/useZStore";

export function Tab({ name }) {
  const setActiveTab = useZStore((state) => state.setActiveTab);
  const setVisible = useZStore((state) => state.setVisible);

  const active = useZStore((state) => state.active);

  const handleClick = (name) => {
    setActiveTab(name);
    setVisible(true);
  };

  return (
    <>
      <button
        onClick={() => handleClick(name)}
        className={`hover:animate-hovery animate-hovery-rev active:animate-clicky pointer-events-auto flex aspect-square origin-left items-baseline-last justify-center rounded-t-lg transition-transform lg:h-auto lg:flex-col lg:items-baseline lg:justify-center lg:rounded-t-none lg:rounded-r-lg ${active === name ? "h-full bg-linear-to-b from-slate-500 to-slate-300 lg:w-full lg:bg-linear-to-l " : " h-[80%] bg-slate-500 lg:w-[80%]"}`}
      >
        <div className={`${active === name ? "rounded-t-md lg:rounded-t-none lg:rounded-r-md" : ""}`}>
          <div className="flex aspect-square items-center justify-center p-1">{name}</div>
        </div>
      </button>
    </>
  );
}
