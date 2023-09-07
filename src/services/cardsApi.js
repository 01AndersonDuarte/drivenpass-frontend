import api from './api';

export async function getCards(token) {
  const response = await api.get('/cards', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getCard(token, id) {
  const response = await api.get(`/cards?id=${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postCard(token, body) {
  const response = await api.post(`/cards`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteCard(token, id) {
  const response = await api.delete(`/cards/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
