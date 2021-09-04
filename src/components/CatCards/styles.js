import styled from 'styled-components';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";

export const AccordionStyled = styled(Accordion)`
    // lógica para caso esteja selecionado
    /* border: 1px solid var(--purple); */
    border: 1px solid var(--gray);
    padding: 20px;
    padding-bottom: 30px;
    margin-top: 20px;
    display: flex;
    
    &:hover{
        border: 1px solid var(--purple);
        transition: all 0.4s linear;
    }

    img{
        height: 200px;
        width: 200px;
        border-radius: 14px;
    }
    .summaryDetails{
        margin-left: 20px;

        &:first-child{
            margin-top: 0;
        }

        & > *{
            margin: 20px 0;
        }

        h1{
            font-size: 20px;
        }
    
        h3{
            font-weight: 700;
        }
    }

`;

export const AccordionDetailsStyled = styled(AccordionDetails)`
    display: flex;
    flex-direction: column;

    * {
        margin: 20px 0;
    }

`;