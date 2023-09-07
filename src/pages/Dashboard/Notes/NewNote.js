import { useState } from "react";
import { useCreateCredential } from "../../../hooks/api/useCredentials";
import { FormStyled, InputStyled, CreateIcon } from "../../../components/Form/StyleForm";
import { Error } from "../../../components/Form/StyleForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Main } from "../style";
import { LabelStyled } from "../../../components/Form/StyleForm";
import BackAndSave from "../../../components/Dashboard/FowardBackward/BackAndSave";
import { useCreateNote } from "../../../hooks/api/useNotes";

export default function NewNote() {
    const [data, setData] = useState({ title: "", note: "" });
    const { noteError, noteLoading, createNote } = useCreateNote();
    const navigate = useNavigate();

    async function create(event) {
        event.preventDefault();
        try {
            const response = await createNote(data);
            toast("Registro criado com sucesso!");
            navigate("/dashboard/notes");
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
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, insira um título.')}
                />

                <LabelStyled htmlFor="note">Note:</LabelStyled>
                <InputStyled
                    type="text"
                    name="note"
                    id="note"
                    required
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                />

                <BackAndSave path={"/dashboard/notes"}/>                
                {noteError && <Error>Você já possui uma nota com esse título.</Error>}
            </FormStyled>
        </Main>
    );
}