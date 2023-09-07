import { NavigationItem, LogoTitle, Title, NoteIcon, CountIcon, Count } from "../style";

export default function Note({ title, path, icon = null }) {
    return (
        <NavigationItem to={path}>
            <LogoTitle>
                <NoteIcon />
                <Title>{title}</Title>
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