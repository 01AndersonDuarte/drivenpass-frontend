import styled from "styled-components";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ClosedEye = styled(AiOutlineEyeInvisible)`
    width: 25px;
    height: auto;
    position: absolute;
    top: 20%;
    right: 28%;
    color: #111136;
    cursor: pointer;
    @media(max-width: 500px){
        right: 10%;
    }
`;

export const OpenEye= styled(AiOutlineEye)`
    width: 25px;
    height: auto;
    position: absolute;
    top: 20%;
    right: 28%;
    color: #111136;
    cursor: pointer;
    @media(max-width: 500px){
        right: 10%;
    }
`;

export const PasswordDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`;

export const LinkSign = styled(Link)`
    margin-top: 5%;
    color: #000;
    text-align: center;
`;

export const ContainerSign = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    padding: 5%;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(135deg, rgba(237, 237, 237,0.9));
    
    font-family: 'Expletus Sans', cursive;
    h1{
        font-weight: 700;
        font-size: 38px;
        margin-bottom: 2%;
    }
    h2{
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 5%;
    }
`;