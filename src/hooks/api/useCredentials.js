import useAsync from '../useAsync';
import * as credentialsApi from '../../services/credentialsApi';
import useToken from '../useToken';

export default function useGetCredentials() {
  const token = useToken();
  const {
    data: credentialsData,
    loading: credentialsLoading,
    error: credentialsError,
    act: credentials
  } = useAsync(() => credentialsApi.getCredentials(token));

  return {
    credentialsData,
    credentialsLoading,
    credentialsError,
    credentials
  };
}

export function useGetCredentialById(id) {
  const token = useToken();
  const {
    data: credentialData,
    loading: credentialLoading,
    error: credentialError,
    act: credential
  } = useAsync(() => credentialsApi.getCredential(token, id));

  return {
    credentialData,
    credentialLoading,
    credentialError,
    credential
  };
}

export function useCreateCredential() {
  const token = useToken();
  const {
    loading: credentialLoading,
    error: credentialError,
    act: createCredential
  } = useAsync((body) => credentialsApi.postCredential(token, body), false);

  return {
    credentialLoading,
    credentialError,
    createCredential
  };
}

export function useDeleteCredential() {
  const token = useToken();
  const {
    loading: credentialLoadingDelete,
    error: credentialError,
    act: deleteCredential
  } = useAsync((id) => credentialsApi.deleteCredential(token, id), false);

  return {
    credentialLoadingDelete,
    credentialError,
    deleteCredential
  };
}