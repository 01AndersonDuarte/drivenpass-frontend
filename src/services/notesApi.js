import api from './api';

export async function getNotes(token) {
  const response = await api.get('/notes', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getNote(token, id) {
  const response = await api.get(`/notes?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postNote(token, body) {
  const response = await api.post(`/notes`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteNote(token, id) {
  const response = await api.delete(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

