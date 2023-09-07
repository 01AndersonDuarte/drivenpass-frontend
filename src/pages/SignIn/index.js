import { useState, useEffect, useContext } from "react";
import { toast } from 'react-toastify';

import { ContainerSign } from "./style";
import { FormStyled, InputStyled, ButtonStyled, Error } from "../../components/Form/StyleForm";
import { LoadingThreeDots } from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useSignIn from "../../hooks/api/useSignIn";

export default function SignIn() {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const { auth, login } = useContext(AuthContext);
    const { signIn, signInLoading, signInError } = useSignIn();

    useEffect(() => {
        if (auth?.token) {
            navigate(`/dashboard`);
        }
    }, [])

    async function singIn(e) {
        e.preventDefault();
        try {
            const userData = await signIn(loginData.email, loginData.password);
            login(userData);
            toast('Login realizado com sucesso!');
            navigate('/dashboard');
        } catch (error) {
            toast('Não foi possível fazer o login!');
        }
    }

    function insertLoginData(event) {
        event.target.setCustomValidity('');

        const value = event.target.value;
        const attribute = event.target.name;

        setLoginData({ ...loginData, [attribute]: value });
    }
    return (
        <>
            <ContainerSign>
                <h1>DrivenPass</h1>
                <FormStyled onSubmit={singIn}>
                    <InputStyled
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        required
                        onChange={insertLoginData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, insira um e-mail válido.')}
                    />
                    <InputStyled
                        placeholder="Senha"
                        type="password"
                        name="password"
                        required
                        onChange={insertLoginData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                    />
                    <ButtonStyled type="submit">
                        {signInLoading ? <LoadingThreeDots /> : "Entrar"}
                    </ButtonStyled>
                    {signInError && <Error>E-mail ou senha incorretos.</Error>}
                </FormStyled>
            </ContainerSign>
        </>
    );
}