import { IoIosLock } from 'react-icons/io';
import { LuLogOut } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Header({ page = false }) {
    const navigate = useNavigate();
    const pageName = page.includes('credential') ? 'credenciais'
        : `${page.includes('card') ? 'cartões'
            : `${page.includes('note') ? 'notas'
                : 'senhas'}`}`;

    function logout() {
        navigate("/");
        localStorage.removeItem("auth");
        window.location.reload();
    }

    return (
        <>
            <ContainerHeader>
                <Logo>
                    <PadlockIcon />
                    <h1>DrivenPass</h1>
                </Logo>
                <LogoutIcon onClick={() => logout()} />
            </ContainerHeader>
            <Page>
                {pageName === 'cartões' ? <h2>Meus {pageName}</h2> : <h2>Minhas {pageName}</h2>}
            </Page>
        </>
    );
}

const Page = styled.div`
    width: 100%;
    height: auto;
    padding: 10px;
    background-color: #111136;

    h2{
        color: #fff;
        font-size: 20px;
        font-family: 'Expletus Sans', cursive;
    }
`;
const ContainerHeader = styled.div`
    width: 100%;
    height: auto;
    padding: 1% 5% 1% 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-size: 40px;
        font-family: 'Expletus Sans', cursive;
    }
    @media (max-width: 500px) {
        h1{
            font-size: 20px;
        }
    }
`;
const Logo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 500) {
        width: 80%;
    }
`;
const PadlockIcon = styled(IoIosLock)`
    width: 60px;
    height: auto;
    color: #111136;
`;

const LogoutIcon = styled(LuLogOut)`
    width: 30px;
    height: auto;
    color: #111136;
    cursor: pointer;
`;
