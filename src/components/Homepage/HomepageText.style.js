import styled from 'styled-components';

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2vh;
    border: 3px solid #C9C904;
    border-radius: 40px;
    padding: 10px;
    font-size: 3.5vh;
    @media (max-width: 500px) {
        height: 80vh;
        width: 100%;
    }
    button {
        align-self: center;
        background-color: #C9C904;
        border-radius: 20px;
        border:none;
        color: #FFFFFF;
        text-align: center;
        font-size: 3.5vh;
        width: 30vh;
        height: 10vh;
        cursor: pointer;
        margin: 5px;
`

