import { useQuery } from 'react-query';
import { ProjectsGroupByClient } from '../types/projects';
import { API_URL } from '../utils/api-client';
import fetch from 'node-fetch';

const getProjects = async () => {
  const res = await fetch(`${API_URL}/projects/`).then((res) => res.json());
  return res as ProjectsGroupByClient[];
};

export const useGetProjects = () => {
  return useQuery(['projects'], getProjects);
};
