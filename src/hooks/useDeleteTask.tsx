import { useMutation, useQueryClient } from 'react-query';
import { IDbTask } from '../types/task';
import { API_URL } from '../utils/api-client';
import fetch from 'node-fetch';

const deleteTask = async (id: string) => {
  const res = await fetch(`${API_URL}/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return res as IDbTask;
};

const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const deletePostMutation = useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });
  return deletePostMutation;
};

export { useDeleteTask };
