import { useState } from "react";
import { FormStyled, InputStyled } from "../../../components/Form/StyleForm";
import { Error } from "../../../components/Form/StyleForm";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Main, Title } from "../style";
import { LabelStyled } from "../../../components/Form/StyleForm";
import BackAndSave from "../../../components/Dashboard/FowardBackward/BackAndSave";
import { useCreateCard } from "../../../hooks/api/useCards";
import { styled } from "styled-components";
import { ButtonStyled } from "../../../components/Form/StyleForm";
import { ContainerActions, FowardIcon, ReturnIcon, CardSummary } from "./style";
import { Bloc } from "./UniqueCard";

export default function NewCard() {
    const [stage, setStage] = useState(0);
    const [data, setData] = useState(
        {
            title: "",
            name: "",
            number: "",
            code: "",
            date: "",
            password: "",
            virtual: "",
            type: ""
        });

    function insertData(event) {
        event.target.setCustomValidity('');

        const value = event.target.value;
        const attribute = event.target.name;

        setData({ ...data, [attribute]: value });
    }

    function next(e) {
        e.preventDefault();
        const keys = Object.keys(data);
        if (data[keys[stage]].trim() !== '') {
            setStage(1 + stage);
        }
    }
    function back() {
        setStage(stage - 1);
    }

    return (
        <Main>
            {stage === 0 &&
                <FormStyled onSubmit={next}>
                    <LabelStyled htmlFor="title">Título:</LabelStyled>
                    <InputStyled
                        type="text"
                        name="title"
                        id="title"
                        required
                        value={data.title}
                        onChange={insertData}
                        onInvalid={(event) => event.target.setCustomValidity('Preencha este campo para continuar.')}
                    />
                    <BackAndNext stage={stage} back={back} path={"/dashboard/cards"}/>
                </FormStyled>
            }

            {stage === 1 &&
                <FormStyled onSubmit={next}>
                    <LabelStyled htmlFor="name">Nome:</LabelStyled>
                    <InputStyled
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={data.name}
                        onChange={insertData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                    />
                    <LabelStyled htmlFor="number">Número:</LabelStyled>
                    <InputStyled
                        type="text"
                        name="number"
                        id="number"
                        required
                        value={data.number}
                        onChange={insertData}
                        pattern="\d{13,16}"
                        onInvalid={(event) => event.target.setCustomValidity('Campo inválido! Somente números de cartões de 13 a 16 dígitos.')}
                    />
                    <LabelStyled htmlFor="code">CVV:</LabelStyled>
                    <InputStyled
                        type="text"
                        name="code"
                        id="code"
                        required
                        value={data.code}
                        onChange={insertData}
                        pattern="\d{3}"
                        onInvalid={(event) => event.target.setCustomValidity('Campo inválido. O código precisa ter 3 digítos!')}
                    />
                    <BackAndNext stage={stage} back={back} />
                </FormStyled>
            }

            {stage === 2 &&
                <FormStyled onSubmit={next}>
                    <LabelStyled htmlFor="date">Data de vencimento:</LabelStyled>
                    <InputStyled
                        type="text"
                        name="date"
                        id="date"
                        required
                        value={data.date}
                        onChange={insertData}
                        pattern="\d{4}-\d{2}-\d{2}"
                        onInvalid={(event) => event.target.setCustomValidity('Preencha com uma data válida. Ex: ANO-MÊS-DIA (2030-05-30)')}
                    />
                    <LabelStyled htmlFor="password">Senha:</LabelStyled>
                    <InputStyled
                        type="text"
                        name="password"
                        id="password"
                        required
                        value={data.password}
                        onChange={insertData}
                        pattern="\d{4}"
                        onInvalid={(event) => event.target.setCustomValidity('Campo inválido. A senha precisa ter 4 digítos!')}
                    />
                    <BackAndNext stage={stage} back={back} />
                </FormStyled>
            }

            {stage === 3 &&
                <Submit data={data} setData={setData} back={back} />
            }
        </Main>
    );
}

function Submit({ data, setData, back }) {
    const { cardError, cardLoading, createCard } = useCreateCard();
    const navigate = useNavigate();

    async function create(event) {
        event.preventDefault();
        if (data.type === "" || data.virtual === "") return toast(<Error>Todos os dados precisam ser preenchidos!</Error>);
        try {
            await createCard(data);
            toast("Registro criado com sucesso!");
            navigate("/dashboard/cards");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <FormStyled onSubmit={create}>
                <ContainerCheckbox>
                    <h1 style={{ fontSize: '20px', marginRight: '2%' }}>Virtual:</h1>
                    <h1>Sim</h1>
                    <input
                        type="checkbox"
                        checked={data.virtual === true}
                        onChange={() => setData({ ...data, virtual: true })}
                    />
                    <h1>Não</h1>
                    <input
                        type="checkbox"
                        checked={data.virtual === false}
                        onChange={() => setData({ ...data, virtual: false })}
                    />
                </ContainerCheckbox>
                <ContainerCheckbox>
                    <h1 style={{ fontSize: '20px', marginRight: '2%' }}>Tipo:</h1>
                    <h1>Crédito</h1>
                    <input
                        type="checkbox"
                        checked={data.type === "CREDIT"}
                        onChange={() => setData({ ...data, type: "CREDIT" })}
                    />

                    <h1>Débito</h1>
                    <input
                        type="checkbox"
                        checked={data.type === "DEBIT"}
                        onChange={() => setData({ ...data, type: "DEBIT" })}
                    />

                    <h1>Ambos</h1>
                    <input
                        type="checkbox"
                        checked={data.type === "BOTH"}
                        onChange={() => setData({ ...data, type: "BOTH" })}
                    />

                </ContainerCheckbox>
                {cardError && <Error>Você já possui um cartão com esse título.</Error>}
                <BackAndSave path={"/dashboard/cards"} titleBack="< Sair" />
            </FormStyled>

            <CardSummary>
                <h1>RESUMO:</h1>
                <div>
                    <Bloc title={"Título"} value={data.title} />
                    <Bloc title={"Nome"} value={data.name} />
                    <Bloc title={"Número"} value={data.number} />
                    <Bloc title={"CVV"} value={data.code} />
                </div>
                <div>
                    <Bloc title={"Validade"} value={data.date} />
                    <Bloc title={"Senha"} value={data.password} />
                    <Bloc title={"Virtual"} value={data.virtual === "" ? "---" : `${data.virtual ? "Sim" : "Não"}`} />
                    <Bloc title={"Tipo"} value={data.type === "CREDIT" ? "Crédito" : `${data.type === "DEBIT" ? "Débito" : `${data.type === "" ? "---" : "Ambos"}`}`} />
                </div>
                <ButtonStyled onClick={back}> <ReturnIcon /> Voltar</ButtonStyled>
            </CardSummary>
        </>
    );
}

const ContainerCheckbox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    h1{
        font-size: 18px;
    }
`;

function BackAndNext({ stage, back, path = null }) {
    return (
        <ContainerActions>
            {stage !== 0 ? <ButtonStyled onClick={back}> <ReturnIcon /></ButtonStyled> : <Link to={path}>Sair</Link>}
            {stage === 3 ? '' : <ButtonStyled type="submit"><FowardIcon /></ButtonStyled>}
        </ContainerActions>
    );
}