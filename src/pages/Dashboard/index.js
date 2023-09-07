import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../../components/Dashboard/Navigation';
import { NavigationContainer } from '../../components/Dashboard/style';

export default function Dashboard() {
    return (
        <DashboardContainer>
            <Navigation/>
            <NavigationContainer>
                <Outlet />
            </NavigationContainer>
        </DashboardContainer>
    );
}

const DashboardContainer = styled.div`
    min-height: 100%;
    position: fixed;
    /* overflow: auto; */
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 0% 0% 5% 0%;
    background-color: #EDEDED;

`;

const Container = styled.div`
  /* padding: 30px; */
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: red;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
