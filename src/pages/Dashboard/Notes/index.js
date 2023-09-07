import { Outlet, useLocation } from "react-router-dom";
import { LoadingCircle } from "../../../components/Loading/Loading";
import useGetNotes from "../../../hooks/api/useNotes";
import Note from "../../../components/Dashboard/Navigation/Note";
import BackAndAdd from "../../../components/Dashboard/FowardBackward/BackAndAdd";
import { ContainerItems } from "../style";
import { useEffect } from "react";

export default function Notes() {
    const location = useLocation();
    const { notesData, notesLoading, notes } = useGetNotes();

    useEffect(() => {
        notes();
        // eslint-disable-next-line
      }, [location]);

    function isActive(buttonPath) {
        return location.pathname === buttonPath;
    }

    if (notesLoading) {
        return (
            <LoadingCircle></LoadingCircle>
        )
    }
    return (
        <>
            {isActive('/dashboard/notes') &&
                <>
                    <LoadNotes data={notesData} />
                    <BackAndAdd pathReturn={"/dashboard"} pathAvance={"/dashboard/notes/new-note"} />
                </>
            }
            <Outlet />
        </>
    );
}

function LoadNotes({ data }) {
    return (
        <ContainerItems>
            {data.map((n) => <Note key={n.id} title={n.title} path={`/dashboard/notes/${n.id}`} />)}
        </ContainerItems>
    );
}