import { Link } from "react-router-dom";
import { BackAndAddBloc, Title, AddIcon } from "./style";

export default function BackAndAdd({ pathReturn, pathAvance}) {
    return (
        <BackAndAddBloc>
            <Link to={pathReturn}>
                <Title size={"20px"}> {'< Voltar'} </Title>
            </Link>
            <Link to={pathAvance}>
                <AddIcon />
            </Link>
        </BackAndAddBloc>
    );
}




