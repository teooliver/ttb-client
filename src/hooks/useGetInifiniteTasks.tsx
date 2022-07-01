import { useInfiniteQuery } from 'react-query';
import { TaskAfterGroupedResult } from '../types/task';
import { API_URL } from '../utils/api-client';
import fetch from 'node-fetch';
import { inifiniteTasksKeys } from '../utils/queryKeys';

const getInifiniteTasks = async ({ pageParam = 1 }) => {
  const res = await fetch(`${API_URL}/tasks/group?page=${pageParam}`).then(
    (res) => res.json()
  );

  return res as TaskAfterGroupedResult;
};

export const useGetInifiniteTasks = () => {
  return useInfiniteQuery([...inifiniteTasksKeys.all], getInifiniteTasks, {
    getNextPageParam: (lastPage, _allPages) => {
      if (lastPage?.pagination?.next_page) {
        return lastPage.pagination.next_page;
      }
    },
  });
};
