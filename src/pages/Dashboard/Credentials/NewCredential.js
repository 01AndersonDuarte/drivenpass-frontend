import { useState } from "react";
import { useCreateCredential } from "../../../hooks/api/useCredentials";
import { FormStyled, InputStyled, CreateIcon } from "../../../components/Form/StyleForm";
import { Error } from "../../../components/Form/StyleForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Main } from "../style";
import { LabelStyled } from "../../../components/Form/StyleForm";
import BackAndSave from "../../../components/Dashboard/FowardBackward/BackAndSave";

export default function NewCredential() {
    const [data, setData] = useState({ title: "", url: "", username: "", password: "" });
    const { credentialError, credentialLoading, createCredential } = useCreateCredential();
    const navigate = useNavigate();

    async function create(event) {
        event.preventDefault();
        try {
            const response = await createCredential(data);
            toast("Registro criado com sucesso!");
            navigate("/dashboard/credentials");
        } catch (error) {
            console.log(error);
        }
    }
    function insertData(event) {
        event.target.setCustomValidity('');

        const value = event.target.value;
        const attribute = event.target.name;

        setData({ ...data, [attribute]: value });
    }
    return (
        <Main>
            <FormStyled onSubmit={create}>
                <LabelStyled htmlFor="title">Título:</LabelStyled>
                <InputStyled
                    type="text"
                    name="title"
                    id="title"
                    required
                    disabled={credentialLoading}
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, insira um título.')}
                />

                <LabelStyled htmlFor="url">URL:</LabelStyled>
                <InputStyled
                    type="url"
                    name="url"
                    id="url"
                    required
                    disabled={credentialLoading}
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, insira uma URL válida.')}
                />

                <LabelStyled htmlFor="username">Usuário:</LabelStyled>
                <InputStyled
                    type="text"
                    name="username"
                    id="username"
                    required
                    disabled={credentialLoading}
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                />

                <LabelStyled htmlFor="password">Senha:</LabelStyled>
                <InputStyled
                    type="text"
                    name="password"
                    id="password"
                    required
                    disabled={credentialLoading}
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                />
                <BackAndSave path={"/dashboard/credentials"} loading={credentialLoading}/>                
                {credentialError && <Error>Você já possui uma credencial com esse título.</Error>}
            </FormStyled>
        </Main>
    );
}