import React, { useState, useEffect } from 'react';
import { Container, Header, Form, MainPage } from './styles';
import CatCards from '../../components/CatCards';

import CatRepository from "../../repositories/CatRepository";

export default function Main() {
    const [cats, setCats] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function load() {
            try {
                const response = await CatRepository.get(search);
                setCats(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        load();
    }, [search]);

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
                <CatCards cats={cats} />
            </MainPage>
        </Container>
    )
}