import { useState } from "react";
import { useCreateCredential } from "../../../hooks/api/useCredentials";
import { FormStyled, InputStyled, CreateIcon } from "../../../components/Form/StyleForm";
import { Error } from "../../../components/Form/StyleForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Main, Title } from "../style";
import { LabelStyled } from "../../../components/Form/StyleForm";
import BackAndSave from "../../../components/Dashboard/FowardBackward/BackAndSave";
import { useCreateNote } from "../../../hooks/api/useNotes";
import { useCreateCard } from "../../../hooks/api/useCards";
import { styled } from "styled-components";

// "title": "Cartão Nubank 2",
//   "name": "Anderson D",
//   "number": "1231231231231232",
//   "code": "000",
//   "date": "2028-05-05",
//   "password": "0000",
//   "virtual": false,
//   "type": "DEBIT"

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
    console.log(data);
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
                    <button type="submit">Prosseguir</button>
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
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                    />
                    <LabelStyled htmlFor="code">CVV:</LabelStyled>
                    <InputStyled
                        type="text"
                        name="code"
                        id="code"
                        required
                        value={data.code}
                        onChange={insertData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                    />
                    <button type="submit">Prosseguir</button>
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
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                    />
                    <LabelStyled htmlFor="password">Senha:</LabelStyled>
                    <InputStyled
                        type="text"
                        name="password"
                        id="password"
                        required
                        value={data.password}
                        onChange={insertData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                    />
                    <button type="submit">Prosseguir</button>
                </FormStyled>
            }

            {stage === 3 &&
                <Submit data={data} setData={setData} />
            }
            {/* {stage !== 3 && <button type="submit">Prosseguir</button>} */}
            {stage !== 0 && <button onClick={back}>Voltar</button>}
        </Main>
    );
}

function Submit({ data, setData }) {
    const { cardError, cardLoading, createCard } = useCreateCard();
    const navigate = useNavigate();

    async function create(event) {
        event.preventDefault();
        if (data.type === "" || data.virtual === "") return toast(<Error>Todos os dados precisam ser preenchidos!</Error>);
        try {
            const response = await createCard(data);
            toast("Registro criado com sucesso!");
            navigate("/dashboard/cards");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <FormStyled onSubmit={create}>
                <VirtualType>
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
                </VirtualType>
                <VirtualType>
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

                </VirtualType>
                {/* <span>
                    <span onClick={() => setData({ ...data, virtual: true })}>Sim</span>
                    <span onClick={() => setData({ ...data, virtual: false })}>Não</span>
                </span> */}
                {/* <LabelStyled htmlFor="type">Tipo:</LabelStyled>
                <span>
                    <span onClick={() => setData({ ...data, type: "CREDIT" })}>Crédito</span>
                    <span onClick={() => setData({ ...data, type: "DEBIT" })}>Débito</span>
                    <span onClick={() => setData({ ...data, type: "BOTH" })}>Ambos</span>
                </span> */}
                {cardError && <Error>Você já possui um cartão com esse título.</Error>}
                <BackAndSave path={"/dashboard/cards"} />
            </FormStyled>












            <div> RESUMO --------------------
                <h1>Título: {data.title}</h1>
                <h1>Nome: {data.name}</h1>
                <h1>Número: {data.number}</h1>
                <h1>CVV: {data.code}</h1>
                <h1>Validade: {data.date}</h1>
                <h1>Senha: {data.password}</h1>
                <h1>Virtual: {data.virtual ? "Sim" : "Não"}</h1>
                <h1>Tipo: {data.type === "CREDIT" ? "Crédito" : `${data.type === "DEBIT" ? "Débito" : "Ambos"}`}</h1>
            </div>
        </>
    );
}

const VirtualType = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    h1{
        font-size: 18px;
    }
`;