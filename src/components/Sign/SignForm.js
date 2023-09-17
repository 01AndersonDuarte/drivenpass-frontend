import { toast } from "react-toastify";
import { useState } from "react";
import { FormStyled, InputStyled, ButtonStyled } from "../../components/Form/StyleForm";
import { LoadingThreeDots } from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { ClosedEye, OpenEye, LinkSign, PasswordDiv } from "./style";
import { PadlockIcon } from "../Dashboard/Header";
import { ContainerSign } from "./style";

export default function SignForm({ actFunction, login = undefined, path, errorMessage, loading, error }) {
    const [data, setData] = useState({ email: '', password: '' });
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    async function act(e) {
        e.preventDefault();
        try {
            const response = await actFunction(data.email, data.password);
            login && login(response) && toast('Login realizado com sucesso!')
            navigate(path);
        } catch (error) {
            toast(errorMessage);
        }
    }

    function insertData(event) {
        event.target.setCustomValidity('');

        const value = event.target.value;
        const attribute = event.target.name;

        setData({ ...data, [attribute]: value });
    }
    return (
        <>
            <ContainerSign>
                <PadlockIcon />
                <h1>DrivenPass</h1>
                {login ? <h2>Seja bem-vindo</h2> : <h2>Crie sua conta aqui!</h2>}
                <FormStyled onSubmit={act}>
                    <InputStyled
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        required
                        disabled={loading}
                        onChange={insertData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, insira um e-mail válido.')}
                    />
                    <PasswordDiv>
                        <InputStyled
                            placeholder="Senha"
                            type={active ? "text" : "password"}
                            name="password"
                            required
                            disabled={loading}
                            onChange={insertData}
                            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])[0-9a-zA-Z\W_]{8,}$"
                            onInvalid={(event) => event.target.setCustomValidity('Informe uma senha segura. Com letra maiúscula, símbolos e números!')}
                        />
                        {active ? <OpenEye onClick={()=>setActive(false)}/> : <ClosedEye onClick={()=>setActive(true)}/>}
                    </PasswordDiv>
                    <ButtonStyled type="submit">
                        {loading ? <LoadingThreeDots /> : "Entrar"}
                    </ButtonStyled>
                </FormStyled>
                <LinkSign to={login ? "/sign-up" : "/"}>
                    {login ? "Primeiro acesso? Crie sua conta!" : "Já tem uma conta? Clique aqui para fazer login"}
                </LinkSign>

            </ContainerSign>
        </>
    );
}