import React, { useState, useEffect } from 'react';
import { Container, Header, Form, MainPage } from './styles';

import CatRepository from "../../repositories/CatRepository";


export default function Main() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        async function load(params) {
            try {
                const response = await CatRepository.getAll({
                    limit: 5
                });
                setCats(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        load();
    }, []);

    return (
        <Container>
            <Header>
                <h3>Cats</h3>
                <Form onChange={() => { }}>
                    <label>Buscar raça: </label>
                    <input type="text" placeholder="" />
                </Form>
            </Header>
            <MainPage>
                {cats.map((cat) => (
                    <div key={cat.id} className="cat-item" onClick={() => { }}>
                        <img src={cat.image.url} alt={cat.name} />

                        <div className="details">
                            <h1>{cat.name}</h1>
                            <h3>Origem: {cat.origin}</h3>
                            <p>Descrição:</p>
                            <p>{cat.description}</p>
                            <p><strong>Temperamento: </strong>{cat.temperament}</p>
                            <p><strong>Adaptabilidade: </strong>{cat.adaptability}</p>
                            <p><strong>Inteligência: </strong>{cat.intelligence}</p>
                            <p><strong>Wikipedia Link: </strong><a href={cat.wikipedia_url}>{cat.wikipedia_url}</a></p>
                        </div>
                    </div>
                ))}
            </MainPage>
        </Container>
    )
}