import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useSignUp from "../../hooks/api/useSignUp";
import SignForm from "../../components/Sign/SignForm";
import { Error } from "../../components/Form/StyleForm";

export default function SignUp() {
    const { auth } = useContext(AuthContext);
    const { signUp, signUpLoading, signUpError } = useSignUp();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth?.token) {
            navigate(`/dashboard`);
        }
        // eslint-disable-next-line
    }, [])

    return (
        <SignForm
            actFunction={signUp}
            path={"/"}
            errorMessage={"Não foi possível fazer o cadastro!"}
            loading={signUpLoading}
            error={signUpError}
        >
            {signUpError && <Error>E-mail ou senha incorretos.</Error>}
        </SignForm>
    );
}