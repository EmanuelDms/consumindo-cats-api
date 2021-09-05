import React, { useState, useEffect } from 'react';
import { Container, Header, Form, MainPage, Paginate } from './styles';
import CatList from '../../components/CatList';

import CatRepository from "../../repositories/CatRepository";

export default function Main() {
    const [results, setResults] = useState([])
    const [cats, setCats] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);

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
        setCount(Math.ceil(cats.length / 5));
    }, [cats]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Container>
            <Header>
                <h3>Cats</h3>
                <Form >
                    <label>Buscar raça: </label>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                </Form>
            </Header>
            <Paginate count={count} page={page} onChange={handleChange} />
            <MainPage>
                <CatList cats={cats} page={page} count={count} />
            </MainPage>
        </Container>
    )
}