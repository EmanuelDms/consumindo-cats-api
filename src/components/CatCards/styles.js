import styled from 'styled-components';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";

export const AccordionStyled = styled(Accordion)`
    // lógica para caso esteja selecionado
    /* border: 1px solid var(--purple); */
    border: 1px solid var(--gray);
    border-radius: 10px;
    padding: 20px;
    padding-bottom: 30px;
    display: flex;

    &{
        margin-top: 20px;
    }

    &:hover{
        border: 1px solid var(--purple);
        transition: all 0.4s linear;
    }

    img{
        height: 200px;
        width: 200px;
        border-radius: 14px;
    }

    h1{
        font-size: 20px;
        margin: 0 0 20px 0;
    }

    h3{
        font-weight: 700;
    }
`;

export const AccordionDetailsStyled = styled(AccordionDetails)`
    margin-left: 20px;

    * {
        margin: 20px 0;
    }

`;