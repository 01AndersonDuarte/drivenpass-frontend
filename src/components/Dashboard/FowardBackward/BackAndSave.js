import { Link } from "react-router-dom";
import { BackAndAddBloc, Title, CreateIcon } from "./style";

export default function BackAndSave({ path, titleBack = '< Voltar' }) {
    return (
        <BackAndAddBloc>
            <Link to={path}>
                <Title size={"20px"}> {titleBack} </Title>
            </Link>
            <button type="submit">
                <CreateIcon />
            </button>
        </BackAndAddBloc>
    );
}