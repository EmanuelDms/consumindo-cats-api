import React, { useState, useEffect } from 'react';
import { Container, Header, Form, MainPage } from './styles';
// import CatCards from '../../components/CatCards';

import CatRepository from "../../repositories/CatRepository";

export default function Main() {
    const [cats, setCats] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        async function load() {
            try {
                let queryParam = { q: query };
                if (query === '') queryParam = {};

                const response = await CatRepository.get(queryParam);
                console.log(response.data.args);
                setCats(response.data);
                console.log(cats);


            } catch (error) {
                console.log(error);
            }
        }

        load();
    }, [query]);

    return (
        <Container>
            <Header>
                <h3>Cats</h3>
                <Form >
                    <label>Buscar raça: </label>
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                </Form>
            </Header>
            <MainPage>
                {/* <CatCards cats={cats} /> */}
            </MainPage>
        </Container>
    )
}