import useAsync from '../useAsync';
import * as notesApi from '../../services/notesApi';
import useToken from '../useToken';

export default function useGetNotes() {
  const token = useToken();
  const {
    data: notesData,
    loading: notesLoading,
    error: notesError,
    act: notes
  } = useAsync(() => notesApi.getNotes(token));

  return {
    notesData,
    notesLoading,
    notesError,
    notes
  };
}

export function useGetNoteById(id) {
  const token = useToken();
  const {
    data: noteData,
    loading: noteLoading,
    error: noteError,
    act: note
  } = useAsync(() => notesApi.getNote(token, id));

  return {
    noteData,
    noteLoading,
    noteError,
    note
  };
}


export function useCreateNote() {
  const token = useToken();
  const {
    loading: noteLoading,
    error: noteError,
    act: createNote
  } = useAsync((body) => notesApi.postNote(token, body), false);

  return {
    noteLoading,
    noteError,
    createNote
  };
}

export function useDeleteNote() {
  const token = useToken();
  const {
    loading: noteLoadingDelete,
    error: noteError,
    act: deleteNote
  } = useAsync((id) => notesApi.deleteNote(token, id), false);

  return {
    noteLoadingDelete,
    noteError,
    deleteNote
  };
}