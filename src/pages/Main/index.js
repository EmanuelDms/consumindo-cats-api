import React, { useState, useEffect } from 'react';
import { Container, Header, Form, MainPage } from './styles';
import CatList from '../../components/CatList';

import CatRepository from "../../repositories/CatRepository";

export default function Main() {
    const [results, setResults] = useState([])
    const [cats, setCats] = useState([]);
    const [search, setSearch] = useState('');

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
    }, [])

    useEffect(() => {
        const filtered = !!search ? results.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase())) : results;
        setCats(filtered)
    }, [results, search]);

    return (
        <Container>
            <Header>
                <h3>Cats</h3>
                <Form >
                    <label>Buscar raça: </label>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                </Form>
            </Header>
            <MainPage>
                <CatList cats={cats} />
            </MainPage>
        </Container>
    )
}