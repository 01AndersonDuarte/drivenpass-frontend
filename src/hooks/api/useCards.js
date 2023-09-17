import useAsync from '../useAsync';
import * as cardsApi from '../../services/cardsApi';
import useToken from '../useToken';


export default function useGetCards() {
  const token = useToken();
  const {
    data: cardsData,
    loading: cardsLoading,
    error: cardsError,
    act: cards
  } = useAsync(() => cardsApi.getCards(token));

  return {
    cardsData,
    cardsLoading,
    cardsError,
    cards
  };
}

export function useGetCardById(id) {
  const token = useToken();
  const {
    data: cardData,
    loading: cardLoading,
    error: cardError,
    act: card
  } = useAsync(() => cardsApi.getCard(token, id));

  return {
    cardData,
    cardLoading,
    cardError,
    card
  };
}

export function useCreateCard() {
  const token = useToken();
  const {
    loading: cardLoading,
    error: cardError,
    act: createCard
  } = useAsync((body) => cardsApi.postCard(token, body), false);

  return {
    cardLoading,
    cardError,
    createCard
  };
}

export function useDeleteCard() {
  const token = useToken();
  const {
    loading: cardLoadingDelete,
    error: cardError,
    act: deleteCard
  } = useAsync((id) => cardsApi.deleteCard(token, id), false);

  return {
    cardLoadingDelete,
    cardError,
    deleteCard
  };
}