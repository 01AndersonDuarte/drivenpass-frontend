import { Link, useNavigate } from "react-router-dom";
import { BackAndAddBloc, Title, DeleteIcon, LinkBack } from "./style";
import { toast } from "react-toastify";

export default function BackAndDelete({ path, id, act, loading }) {
    const navigate = useNavigate();
    console.log("---delete loading, ", loading)
    async function deleteItem() {
        try {
            const data = await act(id);
            navigate(path);
            toast("Item deletado com sucesso.");
        } catch (error) {
            toast("Ocorreu algum erro!");;
        }
    }
    return (
        <BackAndAddBloc>
            <LinkBack to={path} active={loading ? true.toString() : undefined}>
                <Title size={"20px"}> {'< Voltar'} </Title>
            </LinkBack>
            <button disabled={loading} onClick={() => deleteItem()}>
                <DeleteIcon />
            </button>
        </BackAndAddBloc>
    );
}




