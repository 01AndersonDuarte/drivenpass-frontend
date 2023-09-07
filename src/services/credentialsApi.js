import api from './api';

export async function getCredentials(token) {
  const response = await api.get('/credentials', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getCredential(token, id) {
  const response = await api.get(`/credentials?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postCredential(token, body) {
  const response = await api.post(`/credentials`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteCredential(token, id) {
  const response = await api.delete(`/credentials/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

