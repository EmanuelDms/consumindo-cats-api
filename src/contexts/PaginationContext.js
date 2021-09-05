import React, { createContext, useContext, useEffect, useState } from 'react';

export const PaginationContext = createContext({});

export function PaginationProvider({ children }) {
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setNumberOfPages(Math.ceil(items.length / 5));
    }, [items.length]);

    return (
        <PaginationContext.Provider value={{ page, numberOfPages, setPage, setNumberOfPages, items, setItems }}>
            {children}
        </PaginationContext.Provider>
    )
}

export function usePagination() {
    const context = useContext(PaginationContext);
    return context;
}