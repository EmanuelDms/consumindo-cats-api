import styled from 'styled-components';

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import CatCard from './CatCard';

export const CatCardStyled = styled(CatCard)`
    &:not(&:first-child){
        margin-top: 20px;
    }
`;


export const AccordionStyled = styled(Accordion)`
    border: 1px solid ${props => (props.expanded ? "var(--purple)" : "var(--gray)")};
    padding: 20px;
    padding-bottom: 30px;
    display: flex; 
    flex-wrap: wrap;
    
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
        display: flex;
        flex-direction: column;
        width: auto;
        margin-left: 25px;

        h1{
            font-size: 20px;
        }
        
        h3{
            font-weight: 700;
        }

        h3, p{
            margin-top: 20px;
        }
    }

`;

export const AccordionDetailsStyled = styled(AccordionDetails)`
    display: flex;
    flex-direction: column;
    padding: 0 !important;

    & {
        margin-left: 240px;
    }

    p {
        margin-top: 20px;
        line-height: 20px;
    }

`;

export const AccordionSummaryStyled = styled(AccordionSummary)``;