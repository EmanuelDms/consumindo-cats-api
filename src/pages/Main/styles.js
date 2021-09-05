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

export const PageActions = styled.div`
    width: 100%;
    margin: 32px auto;
    .controls {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 8px;
    }

    .controls div {
        cursor: pointer;

        /* border: 1px solid #eee; */

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 14;
    }
`;