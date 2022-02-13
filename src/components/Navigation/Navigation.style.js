import styled from 'styled-components';

export const NavBar = styled.nav`
position: fixed;
top: 0;
width: 100%;
background-color: #dedede;
padding: 10px;

ul  {
    padding-left: 10px;
    display: flex;
    margin: 0;
    list-style-type: none;
    justify-content: space-between;

    p {
        padding-left: 15px;
        margin: 0px;
        font-size: 40px;
        font-weight: bold;
        @media (max-width: 485px) {
            font-size: 25px;
            padding-left: 0px;
        }
    }

    li {
        align-self: center;
        a {
            margin-left: 0px;
            margin-right: 15px;
            text-decoration: none;
            @media (max-width: 350px) {
                display:none;
            }
        }
        svg {
            width: 50px;
            height: 50px;
        }
    }
}
`