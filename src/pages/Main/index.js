import React, { useState, useEffect } from 'react';
import { Container, Header, Form, MainPage, Paginate } from './styles';
import CatList from '../../components/CatList';

import CatRepository from "../../repositories/CatRepository";

export default function Main() {
    const [results, setResults] = useState([])
    const [cats, setCats] = useState([]);
    const [search, setSearch] = useState('');
    const [paginate, setPaginate] = useState({
        page: 1,
        totalPage: 0
    });

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
        setCats(filtered);
    }, [results, search]);

    useEffect(() => {
        setPaginate({ page: paginate.page, totalPage: Math.ceil(cats.length / 5) });
    }, [cats, paginate.page]);

    const handleControls = {
        next() {

            const lastPage = paginate.page >= paginate.totalPage;
            if (!lastPage) {
                setPaginate({ page: paginate.page + 1, totalPage: paginate.totalPage });
            }
        },
        prev() {
            setPaginate(paginate.page - 1);
        }
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
            <Paginate>
                <div className="first">&#171;</div>
                <div className="prev">&lt;</div>
                <div className="numbers">
                    <div>{paginate.page}</div>
                </div>
                <div className="next" onClick={() => handleControls.next()}>&gt;</div>
                <div className="last">&#187;</div>
            </Paginate>
            <MainPage>
                <CatList cats={cats} />
            </MainPage>
        </Container>
    )
}