import { Link, useNavigate } from "react-router-dom";
import { BackAndAddBloc, Title, DeleteIcon } from "./style";
import { toast } from "react-toastify";

export default function BackAndDelete({ path, id, act }) {
    const navigate = useNavigate();

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
            <Link to={path}>
                <Title size={"20px"}> {'< Voltar'} </Title>
            </Link>
            <button onClick={() => deleteItem()}>
                <DeleteIcon />
            </button>
        </BackAndAddBloc>
    );
}




