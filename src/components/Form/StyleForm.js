import styled from "styled-components"

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */

    width: 100%;
    gap: 10px;

    /* input:focus::-webkit-input-placeholder {
        color: transparent;
    } */
`;
export const InputStyled = styled.input`
    width: 50%;
    height: 45px;

    border: solid 1px rgba(212, 212, 212, 1);
    border-radius: 5px;
    outline: 0;

    box-sizing: border-box;
    padding: 10px;
    font-size: 18px;
    font-weight: 400;
    @media(max-width: 450px) {
        width: 100%;
        border: solid 1px rgba(212, 212, 212, 0.5);
        border-radius: 10px;
        font-size: 13px;
    }
    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const LabelStyled = styled.label`
    font-size: 20px;
    font-weight: 500;
    /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
    span{
        margin-left: 2%;
    }
`;

export const ButtonStyled = styled.button`
    width: 50%;
    height: 45px;
    border-radius: 5px;
    border: none;
    font-weight: 700;

    background-color: #111136;
    color: #ffffff;
    font-size: 18px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;

    @media(max-width: 450px) {
        width: 100%;
        height: 35px;
        border-radius: 10px;
        font-size: 15px;
    }
`;

export const Response = styled.div`
    width: 100%;
    padding: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Error = styled.p`
    color: #c4121b;
`;
export const Sucess = styled.p`
    color: #00A843;
`;