import { Outlet, useLocation } from "react-router-dom";
import { LoadingCircle } from "../../../components/Loading/Loading";
import Note from "../../../components/Dashboard/Navigation/Note";
import BackAndAdd from "../../../components/Dashboard/FowardBackward/BackAndAdd";
import { ContainerItems, LoadingContainer } from "../style";
import { useEffect } from "react";
import useGetCards from "../../../hooks/api/useCards";
import PageEmpty from "../../../components/Dashboard/PageEmpty";

export default function Cards() {
    const location = useLocation();
    const { cardsData, cardsLoading, cards } = useGetCards();

    useEffect(() => {
        cards();
        // eslint-disable-next-line
    }, [location]);

    function isActive(buttonPath) {
        return location.pathname === buttonPath;
    }

    if (cardsLoading) {
        return (
            <LoadingContainer>
                <LoadingCircle/>
            </LoadingContainer>
        )
    }
    return (
        <>
            {isActive('/dashboard/cards') &&
                <>
                    {cardsData.length === 0 ? <PageEmpty /> : <LoadNotes data={cardsData} />}
                    <BackAndAdd pathReturn={"/dashboard"} pathAvance={"/dashboard/cards/new-card"} />
                </>
            }
            <Outlet />
        </>
    );
}

function LoadNotes({ data }) {
    return (
        <ContainerItems>
            {data.map((n) => <Note key={n.id} title={n.title} path={`/dashboard/cards/${n.id}`} />)}
        </ContainerItems>
    );
}