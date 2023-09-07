import { useState, useEffect } from 'react';

export default function useAsync(handler, start = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(start);
  const [error, setError] = useState(null);

  const act = async(...args) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (error) {
      setError(error);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    if (start) {
      act();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    act
  };
}
