import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useSignIn from "../../hooks/api/useSignIn";
import SignForm from "../../components/Sign/SignForm";
import { Error } from "../../components/Form/StyleForm";

export default function SignIn() {
    const navigate = useNavigate();
    const { auth, login } = useContext(AuthContext);
    const { signIn, signInLoading, signInError } = useSignIn();

    useEffect(() => {
        if (auth?.token) {
            navigate(`/dashboard`);
        }
        // eslint-disable-next-line
    }, [])

    return (
        <SignForm
            actFunction={signIn}
            login={login}
            path={"/dashboard"}
            errorMessage={"Email ou senha inválido"}
            loading={signInLoading}
            error={signInError}
        />
    );
}