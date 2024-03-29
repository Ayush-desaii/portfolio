import React from "react";

function SectionTitle({
    title
}) {
    return (
        <div className="flex">
            <h1 className="text-2xl text-tertiary font-semibold">{title}</h1>
        </div>
    )
}

export default SectionTitle