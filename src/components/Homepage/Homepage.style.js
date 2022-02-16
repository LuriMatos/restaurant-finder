import styled from 'styled-components';

export const HomepageWrapper = styled.div`
    width: 100%;
    display: flex;
    font-size: 10px;
    text-align: center;
    display: flex;

    @media (max-width: 500px) {
        flex-direction: column;
        width: 100vh; // Need to verify the width from the box. It is not responsive right now.
    }
    
    svg {
        height: 85vh;
        width: 85vh;
        @media (max-width: 500px) {
            height: 50vh;
        }
    }
    `