import { NavigationItem, LogoTitle, Title, CredentialIcon, CountIcon, Count } from "../style";

export default function Credential({ title, path, icon = null }) {
    return (
        <NavigationItem to={path}>
            <LogoTitle>
                <CredentialIcon />
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