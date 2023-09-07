import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { AuthProvider } from "./context/AuthContext";

import Dashboard from "./pages/Dashboard";
import Credentials from "./pages/Dashboard/Credentials";
import Notes from "./pages/Dashboard/Notes";
import Cards from "./pages/Dashboard/Cards";
import UniqueCredential from "./pages/Dashboard/Credentials/UniqueCredential";
import useToken from "./hooks/useToken";
import SignIn from "./pages/SignIn";
import UniqueNote from "./pages/Dashboard/Notes/UniqueNote";
import NewCredential from "./pages/Dashboard/Credentials/NewCredential";
import NewNote from "./pages/Dashboard/Notes/NewNote";
import UniqueCard from "./pages/Dashboard/Cards/UniqueCard";
import NewCard from "./pages/Dashboard/Cards/NewCard";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<SignIn />} />
            {/* <Route path="/sign-up" element={} /> */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteGuard>
                  <Dashboard />
                </ProtectedRouteGuard>
              }
            >
              <Route path="credentials" element={<Credentials />}>
                <Route path=":id" element={<UniqueCredential />} />
                <Route path="new-credential" element={<NewCredential />} />
                {/* <Route index path="*" element={<Navigate to="/dashboard/credentials" />} /> */}
                {/* Essa linha ta impedindo de o navegador identificar a ação de retorno na página  */}
              </Route>
              <Route path="notes" element={<Notes />} >
                <Route path=":id" element={<UniqueNote />} />
                <Route path="new-note" element={<NewNote />} />
              </Route>
              <Route path="cards" element={<Cards />} >
                <Route path=":id" element={<UniqueCard />} />
                <Route path="new-card" element={<NewCard />} />
              </Route>
              <Route index path="*" element={<Navigate to="/dashboard" />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    toast('Você precisa estar logado para acessar essa página!');
    return <Navigate to="/" />;
  }

  return (
    <>
      {children}
    </>);
}

export default App;
