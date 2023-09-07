import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    max-height: 400px;
    padding: 2%;
    line-height: 40px;
    overflow-y: auto;
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

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 25%;
    /* bottom: 0; */
    right: 0;
    left: 0;
`;