import styled from 'styled-components';

import Pagination from '@material-ui/lab/Pagination';

export const Container = styled.div`
    max-width: 100vw;
    background-color: var(--white);
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

`;

export const Header = styled.header`
    padding: 15px 20px;
    background-color: var(--purple);
    color: var(--white);

    display: flex;
    justify-content: space-between;
    align-items: center;

    form{
        label{
            font-weight: bold;
        }

        input{
            border-radius: 4px;
            padding: 5px 0;
            margin-left: 10px;
        }
    }
`;

export const MainPage = styled.main`
    padding: 30px 20px;
`;

export const Paginate = styled(Pagination)`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    
`;