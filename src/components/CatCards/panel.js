import React, { useState } from 'react';
import { AccordionStyled, AccordionDetailsStyled } from './styles';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";

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
                <img src={cat.image.url} alt={cat.name} />
            </AccordionSummary>
            <AccordionDetailsStyled>
                <Typography>Some more text</Typography>
            </AccordionDetailsStyled>
        </AccordionStyled>
    )

}