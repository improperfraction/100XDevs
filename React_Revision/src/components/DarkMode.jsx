import { useState } from "react";


function DarkMode() {
    const [dmode, setDmode] = useState(false)

    return (
        <div className={`${dmode ? "dark" : ""}`}>
            <div className=" flex items-center justify-center  bg-slate-200 dark:bg-slate-700 w-screen h-screen transition duration-500">
                <button className="bg-slate-500 dark:bg-slate-50 dark:text-black m-1 text-white px-4 py-2 rounded-lg transition duration-500" onClick={() => {
                    setDmode(!dmode)
                }}>{dmode ? <p>Disable Dark Mode</p> : <p>Enable Dark Mode</p>}</button>
            </div>
        </div>
    )
}

export default DarkMode