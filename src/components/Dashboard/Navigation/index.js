import { useLocation } from 'react-router-dom';
import { NavigationContainer } from '../style';
import Header from '../Header';
import Credential from './Credential';
import Note from './Note';
import Card from './Card';
import useGetCredentials from '../../../hooks/api/useCredentials';
import useGetNotes from '../../../hooks/api/useNotes';
import useGetCards from '../../../hooks/api/useCards';

export default function Navigation() {
    const location = useLocation();
    const { credentialsData, credentialsLoading } = useGetCredentials();
    const { notesData, notesLoading } = useGetNotes();
    const { cardsData, cardsLoading } = useGetCards();

    function isActive(buttonPath) {
        return location.pathname === buttonPath;
    }

    return (
        <>
            <Header page={location.pathname} />
            {isActive('/dashboard') &&
                <NavigationContainer>
                    <Credential title={'Credenciais'} path={"/dashboard/credentials"} icon={credentialsData} />
                    <Note title={'Notas'} path={"/dashboard/notes"} icon={notesData}/>
                    <Card title={'Cartões'} path={"/dashboard/cards"} icon={cardsData}/>
                </NavigationContainer>
            }
        </>
    );
}