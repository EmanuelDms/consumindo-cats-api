import React, { useState } from "react";
import CatCard from './CatCard';

export default function CatList({ cats }) {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [willCloseCard, setWillCloseCard] = useState(false);

    const handleClick = (clickedIndex) => {

        const willOpenCard = clickedIndex !== expandedIndex || willCloseCard;

        if (willOpenCard) {
            setWillCloseCard(false);
            setExpandedIndex(clickedIndex);
            return;
        }

        setWillCloseCard(true)
    }

    return (
        <>
            {
                cats.map((cat, index) => (
                    <CatCard onClick={() => handleClick(index)} expanded={!willCloseCard ? index === expandedIndex : false} key={index} index={index} cat={cat} />
                ))
            }
        </>
    );
}
