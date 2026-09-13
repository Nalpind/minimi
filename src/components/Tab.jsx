import { useZStore } from '../store/useZStore'
import { PiStarFill } from 'react-icons/pi'
import { IconContext } from 'react-icons'

export function Tab({ name }) {
    const setActiveTab = useZStore((state) => state.setActiveTab)
    const active = useZStore((state) => state.active)
    const handleClick = (name) => {
        setActiveTab(name)
    }
    return (
        <>
            <button
                onClick={() => handleClick(name)}
                className={`pointer-events-auto flex aspect-square w-fit rounded-r-lg py-0.5 pr-0.5 ${active === name ? 'bg-linear-to-l from-slate-600 to-slate-300' : 'bg-slate-500 inset-shadow-[5px_0_3px_rgba(0,0,0,0.50)]'}`}
            >
                <div className={`grow rounded-r-lg p-2 ${active === name ? 'bg-slate-300' : ''}`}>
                    <IconContext.Provider value={{ size: '3em', color: `${active === name ? 'blue' : ''}` }}>
                        <div className="flex flex-row content-center justify-center">{<PiStarFill />}</div>
                    </IconContext.Provider>
                </div>
            </button>
        </>
    )
}
