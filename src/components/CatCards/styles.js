import styled from 'styled-components';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from '@material-ui/core/AccordionSummary';

export const AccordionStyled = styled(Accordion)`
    // lógica para caso esteja selecionado
    /* border: 1px solid var(--purple); */
    border: 1px solid ${props => (props.expanded ? "#8A2BE2" : "#DFDFDF")};
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
        width: 50vw;
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

export const AccordionSummaryStyled = styled(AccordionSummary)``;