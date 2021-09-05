import React, { useState, useEffect } from "react";
import { usePagination } from "../../contexts/PaginationContext";
import { CatCardStyled } from "./styles";

export default function CatList({ cats }) {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [willCloseCard, setWillCloseCard] = useState(false);
    const [paginatedCats, setPaginatedCats] = useState([]);
    const { page } = usePagination();

    useEffect(() => {
        let perPage = 5;
        let pageIndexed = page - 1;

        let start = pageIndexed * perPage;
        let end = start + perPage;

        setPaginatedCats(cats.slice(start, end));
    }, [page, cats]);

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
                paginatedCats.map((cat, index) => (
                    <CatCardStyled
                        onClick={() => handleClick(index)}
                        expanded={!willCloseCard ? index === expandedIndex : false}
                        key={index}
                        index={index}
                        cat={cat}
                    />
                ))
            }
        </>
    );
}
