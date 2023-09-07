import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IoEnter, IoPencilSharp } from 'react-icons/io5'
import { HiCreditCard } from 'react-icons/hi';
import { BsFillCircleFill } from 'react-icons/bs';

export const NavigationItem = styled(Link)`
    width: 100%;
    padding: 2%;
    margin-bottom: 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: aliceblue;
    text-decoration: none;
`;
export const LogoTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
export const Title = styled.h1`
    margin-left: 5%;
    color: #000;
    font-size: 15px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
`;
export const NavigationContainer = styled.div`
    /* width: 100%; */
    min-height: 100%;
    /* padding: 0 0 20% 0; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* overflow-y: auto; */
    /* background-color: red; */
`;

export const CredentialIcon = styled(IoEnter)`
    width: 50px;
    height: auto;
    color: #111136;
`;

export const NoteIcon = styled(IoPencilSharp)`
    width: 50px;
    height: auto;
    color: #111136;
`;

export const CardIcon = styled(HiCreditCard)`
    width: 50px;
    height: auto;
    color: #111136;
`;

export const CountIcon = styled(BsFillCircleFill)`
    width: 30px;
    height: 30px;
    color: #111136;
`;

export const Count = styled.div`
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        z-index: 1;
    }
`;