import styled from 'styled-components';

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

export const Form = styled.form`
`;

export const MainPage = styled.main`
    padding: 30px 20px;
`;

export const Paginate = styled.div`
    margin: 30px auto auto;
    font-weight: bold;

    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    
    div:not(.numbers div) {
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        padding: 10px;
        cursor: pointer;

        width: 40px;
        height: 40px;

    }
`;