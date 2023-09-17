import { Link } from "react-router-dom";
import { BackAndAddBloc, Title, CreateIcon } from "./style";

export default function BackAndSave({ path, titleBack = '< Voltar', loading }) {
    return (
        <BackAndAddBloc>
            <Link to={loading==false && path}>
                <Title size={"20px"}> {titleBack} </Title>
            </Link>
            <button type="submit" disabled={loading}>
                <CreateIcon />
            </button>
        </BackAndAddBloc>
    );
}