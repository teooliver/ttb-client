import { useQuery } from 'react-query';
import { IClient } from '../src/types/clients';
import { API_URL } from '../src/utils/api-client';

const getClients = async () => {
  const res = await fetch(`${API_URL}/clients`).then((res) => res.json());
  return res as IClient[];
};

export const useGetClients = () => {
  return useQuery(['clients'], getClients);
};
