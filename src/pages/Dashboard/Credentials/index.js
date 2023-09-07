import Credential from "../../../components/Dashboard/Navigation/Credential";
import { Outlet, useLocation } from "react-router-dom";
import useGetCredentials from "../../../hooks/api/useCredentials";
import { LoadingCircle } from "../../../components/Loading/Loading";
import { ContainerItems } from "../style";
import BackAndAdd from "../../../components/Dashboard/FowardBackward/BackAndAdd";
import { useEffect } from "react";

export default function Credentials() {
    const location = useLocation();
    const { credentialsData, credentialsLoading, credentials } = useGetCredentials();

    useEffect(() => {
        credentials();
      }, [location]);

    function isActive(buttonPath) {
        return location.pathname === buttonPath;
    }

    if (credentialsLoading) {
        return (
            <LoadingCircle></LoadingCircle>
        )
    }
    return (
        <>
          {
            isActive('/dashboard/credentials')
            &&
            <>
              <LoadCredentials data={credentialsData}/>
              <BackAndAdd pathReturn={"/dashboard"} pathAvance={"/dashboard/credentials/new-credential"}/>
            </>
          }
          <Outlet />
        </>
    );
}

function LoadCredentials({ data }) {
  return (
    <ContainerItems>
      {data.map((c) => <Credential key={c.id} title={c.title} path={`/dashboard/credentials/${c.id}`}/>)}
    </ContainerItems>
  );
}

