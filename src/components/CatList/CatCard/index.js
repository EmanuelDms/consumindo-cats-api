import React from 'react';
import { AccordionStyled, AccordionDetailsStyled, AccordionSummaryStyled } from '../styles';

export default function CatCard({ expanded = false, cat, index, ...rest }) {
    return (
        <AccordionStyled
            expanded={expanded}
            {...rest}
        >
            <AccordionSummaryStyled
                id={`panel${index}bh-header`}
                aria-controls={`panel${index}bh-content`}
            >
                {cat?.image?.url && <img src={cat?.image?.url} alt={cat.name} />}
                <div className="summaryDetails">
                    <h1>{cat.name}</h1>
                    <h3>Origem: {cat.origin}</h3>
                    <p>Descrição:</p>
                    <p>{cat.description}</p>
                </div>
            </AccordionSummaryStyled>
            <AccordionDetailsStyled>
                <p><strong>Temperamento: </strong>{cat.temperament}</p>
                <p><strong>Adaptabilidade: </strong>{cat.adaptability}</p>
                <p><strong>Inteligência: </strong>{cat.intelligence}</p>
                <p><strong>Wikipedia Link: </strong><a href={cat.wikipedia_url}>{cat.wikipedia_url}</a></p>
            </AccordionDetailsStyled>
        </AccordionStyled>
    )

}