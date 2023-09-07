import { NavigationItem, LogoTitle, Title, CardIcon, CountIcon, Count } from "../style";

export default function Card({ title, path, icon = null }) {
    return (
        <NavigationItem to="/dashboard/cards">
            <LogoTitle>
                <CardIcon />
                <Title>Cartões</Title>
            </LogoTitle>
            {icon &&
                <Count>
                    <CountIcon />
                    <h1>{icon.length}</h1>
                </Count>
            }
        </NavigationItem>
    );
}