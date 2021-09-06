import React, { createContext, useContext, useEffect, useState } from 'react';

export const PaginationContext = createContext({});

export function PaginationProvider({ children }) {
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [items, setItems] = useState([]);
    const perPage = 5;

    useEffect(() => {
        setNumberOfPages(Math.ceil(items.length / perPage));
    }, [items.length]);

    return (
        <PaginationContext.Provider value={{ page, setPage, numberOfPages, setNumberOfPages, items, setItems, perPage }}>
            {children}
        </PaginationContext.Provider>
    )
}

export function usePagination() {
    const context = useContext(PaginationContext);
    return context;
}