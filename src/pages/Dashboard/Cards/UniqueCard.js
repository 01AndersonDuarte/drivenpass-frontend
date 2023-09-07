import { LoadingCircle } from "../../../components/Loading/Loading";
import { useDeleteCard, useGetCardById } from "../../../hooks/api/useCards";
import { Main, Title, Value, BlocMain } from "../style";
import BackAndDelete from "../../../components/Dashboard/FowardBackward/BackAndDelete";
import { useParams } from "react-router-dom";

export default function UniqueCard(){
    const { id } = useParams();
    const { cardData, cardLoading } = useGetCardById(id);
    const { deleteCard } = useDeleteCard();

    if (cardLoading) {
        return <LoadingCircle />
    }
    return (
        <Main>
            <Title size={'25px'}>{cardData.title}</Title>
            <Bloc title={'Número'} value={cardData.number} />
            <Bloc title={'Nome'} value={cardData.name} />
            <Bloc title={'Código'} value={cardData.code} />
            <Bloc title={'Validade'} value={cardData.date} />
            <Bloc title={'Senha'} value={cardData.password} />
            <Bloc title={'Meio de uso'} value={cardData.virtual} />
            <Bloc title={'Tipo'} value={cardData.type} />
            <BackAndDelete path={"/dashboard/cards"} id={cardData.id} act={deleteCard}/>
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