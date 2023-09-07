import { useParams } from "react-router-dom";
import { LoadingCircle } from "../../../components/Loading/Loading";
import { Main, Title, Value, BlocMain, LoadingContainer } from "../style";
import { useDeleteNote, useGetNoteById } from "../../../hooks/api/useNotes";
import BackAndDelete from "../../../components/Dashboard/FowardBackward/BackAndDelete";

export default function UniqueNote() {
    const { id } = useParams();
    const { noteData, noteLoading } = useGetNoteById(id);
    const { deleteNote } = useDeleteNote();


    if(noteLoading){
        return(
            <LoadingContainer>
                <LoadingCircle/>
            </LoadingContainer>
        );
    }
    return (
        <Main>
            <Title size={'25px'}>{noteData.title}</Title>
            <Bloc title={'Anotação'} value={noteData.note}/>
            <BackAndDelete path={"/dashboard/notes"} id={noteData.id} act={deleteNote}/>
        </Main>
    );

}

function Bloc({title, value}){
    return(
        <BlocMain>
            <Title size={'18px'}>{title}:</Title>
            <Value>{value}</Value>
        </BlocMain>
    );
}