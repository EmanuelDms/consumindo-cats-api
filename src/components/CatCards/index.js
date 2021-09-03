import React from "react";
import Panel from './panel';

export default function CatCards({ cats }) {

    return (
        <>
            {
                cats.map((cat, index) => (
                    <Panel key={index} sd={true} index={index} cat={cat} />
                ))
            }
        </>
    );
}
