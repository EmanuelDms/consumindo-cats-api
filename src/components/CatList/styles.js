import styled from 'styled-components';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from '@material-ui/core/AccordionSummary';

export const AccordionStyled = styled(Accordion)`
    border: 1px solid ${props => (props.expanded ? "#8A2BE2" : "#DFDFDF")};
    padding: 20px;
    padding-bottom: 30px;
    margin-top: 20px;
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

        * {
        margin: 10px 0;
        }

        h1{
            margin-top: 0;
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

    &:first-child{
        margin-top: 0;
    }

    & {
        margin-left: 220px;
        /* background-color: red; */
    }

    p {
        line-height: 0.5px;
    }

`;

export const AccordionSummaryStyled = styled(AccordionSummary)``;