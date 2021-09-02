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

    .cat-item{
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

        .details{
            margin-left: 20px;
            
            * {
                margin: 20px 0;
            }
            
            h1{
                font-size: 20px;
                margin: 0 0 20px 0;
            }

            h3{
                font-weight: 700;
            }

        }
    }
`;