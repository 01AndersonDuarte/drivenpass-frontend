import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs"
import { IoAddCircle } from "react-icons/io5";
import { TiDelete } from "react-icons/ti"

export const BackAndAddBloc = styled.div`
    width: 100%;
    padding: 0 5% 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 5%;
    /* right: 10%; */
    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    color: #000;
    font-size: ${({ size }) => size && size};
    font-weight: 900;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const CreateIcon = styled(BsCheckCircleFill)`
    width: 50px;
    height: 50px;
    color: green;
`;

export const DeleteIcon = styled(TiDelete)`
    width: 50px;
    height: 50px;
    color: red;
`;

export const AddIcon = styled(IoAddCircle)`
    width: 50px;
    height: 50px;
    color: #111136;
`;