import { useParams } from "react-router-dom";
import { useDeleteCredential, useGetCredentialById } from "../../../hooks/api/useCredentials";
import { LoadingCircle } from "../../../components/Loading/Loading";
import { Main, Title, Value, BlocMain } from "../style";
import BackAndDelete from "../../../components/Dashboard/FowardBackward/BackAndDelete";

export default function UniqueCredential() {
    const { id } = useParams();
    const { credentialData, credentialLoading, credential } = useGetCredentialById(id);
    const { deleteCredential } = useDeleteCredential();

    if (credentialLoading) {
        return <LoadingCircle />
    }
    return (
        <Main>
            <Title size={'25px'}>{credentialData.title}</Title>
            <Bloc title={'URL'} value={credentialData.url} />
            <Bloc title={'Usuário'} value={credentialData.username} />
            <Bloc title={'Senha'} value={credentialData.password} />
            <BackAndDelete path={"/dashboard/credentials"} id={credentialData.id} act={deleteCredential}/>
        </Main>
    );

}

function Bloc({ title, value }) {
    return (
        <BlocMain>
            <Title size={'18px'}>{title}:</Title>
            <Value>{value}</Value>
        </BlocMain>
    );
}