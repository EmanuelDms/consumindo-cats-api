import React, { useState, useEffect } from 'react';
import { Container, Header, Form, MainPage } from './styles';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

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

    const Accordion = withStyles({
        root: {
            boxShadow: 'none',
            '&:not(:last-child)': {
                borderBottom: 0,
            },
            '&:before': {
                display: 'none',
            },
            '&$expanded': {
                margin: 'auto',
            },
        },
        expanded: {},
    })(MuiAccordion);

    const AccordionSummary = withStyles({
        root: {
            minHeight: 56,
            '&$expanded': {
                minHeight: 56,
            },
        },
        content: {
            '&$expanded': {
                margin: '12px 0',
            },
        },
        expanded: {},
    })(MuiAccordionSummary);

    const AccordionDetails = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2),
        },
    }))(MuiAccordionDetails);

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }

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
                {cats.map((cat, index) => (
                    <Accordion key={index + 1} expanded={expanded === `panel${index + 1}`} onClick={() => handleChange(`panel${index + 1}`)}>
                        <AccordionSummary aria-controls={`panel${index + 1}d-content`} id={`panel${index + 1}d-header`}>
                            {/* <img src={cat.image.url} alt={cat.name} /> */}
                            <h1>{cat.name}</h1>
                            <h3>Origem: {cat.origin}</h3>
                            <p>Descrição:</p>
                            <p>{cat.description}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p><strong>Temperamento: </strong>{cat.temperament}</p>
                            <p><strong>Adaptabilidade: </strong>{cat.adaptability}</p>
                            <p><strong>Inteligência: </strong>{cat.intelligence}</p>
                            <p><strong>Wikipedia Link: </strong><a href={cat.wikipedia_url}>{cat.wikipedia_url}</a></p>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </MainPage>
        </Container >
    )
}