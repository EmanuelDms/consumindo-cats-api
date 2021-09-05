import React, { useState, useEffect } from 'react';
import { Container, Header, MainPage, Paginate } from './styles';
import CatList from '../../components/CatList';

import CatRepository from "../../repositories/CatRepository";
import { usePagination } from '../../contexts/PaginationContext';

export default function Main() {
    const [results, setResults] = useState([])
    const [cats, setCats] = useState([]);
    const [search, setSearch] = useState('');
    const { page, numberOfPages, setPage, setCount } = usePagination();

    useEffect(() => {
        async function load() {
            try {
                const { data } = await CatRepository.get();
                setResults(data);
            } catch (error) {
                console.log(error);
            }
        }

        load();
    }, []);

    useEffect(() => {
        const filtered = !!search ? results.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase())) : results;
        setCats(filtered);
        setPage(1);
    }, [results, search]);

    useEffect(() => {
        setCount(cats.length);
    }, [cats.length]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Container>
            <Header>
                <h3>Cats</h3>
                <form>
                    <label>Buscar raça: </label>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                </form>
            </Header>
            <Paginate count={numberOfPages} page={page} onChange={handleChange} />
            <MainPage>
                <CatList cats={cats} />
            </MainPage>
        </Container>
    )
}