import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

export const ContainerActions = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    button{
        width: 40%;
        height: 30px;
        font-size: 13px;
        &:hover{
            background-color: #171749;
        }
    }
    @media(max-width: 500px){
        width: 50%;
        button{
            color: transparent;
        }
        
    }
`;

export const ReturnIcon = styled(AiOutlineArrowLeft)`
    width: 20px;
    height: auto;
    color: #fff;
    cursor: pointer
`;

export const FowardIcon = styled(AiOutlineArrowRight)`
    width: 20px;
    height: auto;
    color: #fff;
    cursor: pointer
`;

export const CardSummary = styled.div`
    width: 100%;
    display: flex;
    padding: 2%;
    margin-top: 2%;
    border: 1px solid rgba(1, 1, 1, 0.2);
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 20px;
        font-weight: 900;
    }
    h2{
        font-size: 18px;
        margin-left: 2%;
    }
    div{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        h1{
            margin-left: 2%;
        }
    }
    button{
        width: 10%;
        @media(max-width: 500px){
            width: 30%; 
        }
    }
`;