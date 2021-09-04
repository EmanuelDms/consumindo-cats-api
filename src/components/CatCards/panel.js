import React, { useState } from 'react';
import { AccordionStyled, AccordionDetailsStyled } from './styles';
import AccordionSummary from "@material-ui/core/AccordionSummary";

export default function Panel({ index, cat }) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (evt, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <AccordionStyled
            expanded={expanded === true}
            onChange={handleChange(true)}
        >
            <AccordionSummary
                id={`panel${index}bh-header`}
                aria-controls={`panel${index}bh-content`}
            >
                {cat?.image?.url && <img src={cat?.image?.url} alt={cat.name} />}
                <h1>{cat.name}</h1>
                <h3>Origem: {cat.origin}</h3>
                <p>Descrição:</p>
                <p>{cat.description}</p>
            </AccordionSummary>
            <AccordionDetailsStyled>
                <p><strong>Temperamento: </strong>: {cat.temperament}</p>
                <p><strong>Adaptabilidade: </strong>: {cat.adaptability}</p>
                <p><strong>Inteligência: </strong>: {cat.intelligence}</p>
                <p><strong>Wikipedia Link: </strong>: <a href={cat.wikipedia_url}>{cat.wikipedia_url}</a></p>
            </AccordionDetailsStyled>
        </AccordionStyled>
    )

}