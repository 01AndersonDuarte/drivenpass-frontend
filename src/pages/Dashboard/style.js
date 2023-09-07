import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    height: auto;
    padding: 2%;
    line-height: 40px;
`;

export const BlocMain = styled.div`
    width: 100%;
    line-height: 35px;
`;

export const Value = styled.h2`
    color: #000;
    font-size: 20px;
    font-weight: 200;
`;

export const ContainerItems = styled.div`
    width: 100%;
    position: absolute;
    max-height: 65%;
    overflow-y: auto;

    /* @media(min-width: 500px){
        max-height: 100%;
    } */
`;

export const Title = styled.h1`
    color: #000;
    font-size: ${({ size }) => size && size};
    font-weight: 900;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;