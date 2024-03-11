import React from "react";

function Intro() {
    return (
        <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
            <h1 className="text-tertiary">Hi, I'm</h1>
            <h1 className="text-7xl text-secondary font-semibold">Ayush J. Desai</h1>
            <h1 className="text-7xl text-secondary font-semibold">I build Softwares.</h1>
            <p className="text-tertiary w-2/3">
                I am web and AI developer, curruntly studying in third year of computer engineering in sarvajanik 
                college of engineering and technolgy, surat, gujrat.
            </p>
            <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">Get Started</button>

        </div>
    )
}

export default Intro;