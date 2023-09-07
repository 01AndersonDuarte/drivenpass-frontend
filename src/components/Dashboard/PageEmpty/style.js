import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 5%;
    font-size: 35px;
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
    color: #a9a9a9;

    @media(max-width: 500px){
        font-size: 25px;
    }
`;