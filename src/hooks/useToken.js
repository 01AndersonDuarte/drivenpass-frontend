import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function useToken() {
  const { auth: user } = useContext(AuthContext);

  return user?.token;
}
