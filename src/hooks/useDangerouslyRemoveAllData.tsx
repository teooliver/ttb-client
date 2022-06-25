import { useMutation, useQueryClient } from 'react-query';
import { API_URL } from '../utils/api-client';
import fetch from 'node-fetch';
import { TaskAfterGroupedResult } from '../types/task';

// const deleteTask = async (id: string) => {
//   const res = await fetch(`${API_URL}/tasks/${id}`, {
//     method: 'DELETE',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   }).then((res) => res.json());

//   return res as IDbTask;
// };

const handleRemoveAllData = async () => {
  await fetch(`${API_URL}/seed/remove`);
};

export const useDangerouslyRemoveAllData = () => {
  const queryClient = useQueryClient();
  const removeAllDataMutation = useMutation(handleRemoveAllData, {
    // onSuccess: () => {
    //   queryClient.invalidateQueries(['infinite-tasks']);
    // },

    onMutate: async () => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(['infinite-tasks']);

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(['infinite-tasks']);

      // Optimistically update to the new value
      queryClient.setQueryData(['infinite-tasks'], (data: any) => ({
        pages: [
          {
            results: [],
            pagination: {
              previous: null,
              next: null,
              next_page: 0,
              previous_page: 0,
              total_pages: 0,
              total_items: 0,
              size: 0,
              start: 0,
            },
          },
        ],
        pageParams: data.pageParams,
      }));

      // Return a context object with the snapshotted value
      return { previousTodos };
    },

    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['infinite-tasks'], context?.previousTodos);
    },

    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(['infinite-tasks']);
    },
  });
  return removeAllDataMutation;
};
