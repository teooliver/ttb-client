import React, {
  createContext,
  ReactChild,
  ReactFragment,
  ReactPortal,
  useState,
} from 'react';
import { TaskCreate } from '../../hooks/useCreateTask';

interface TaskContextDefaults {
  task: TaskCreate;
  setTask: React.Dispatch<React.SetStateAction<TaskCreate>>;
}

const defaultTask: TaskCreate = {
  name: '',
  end_time: new Date(),
  initial_time: new Date(),
};

export const TaskContext = createContext<TaskContextDefaults>({
  task: defaultTask,
  setTask: () => {},
});
TaskContext.displayName = 'TaskContext';

interface TaskProviderTypes {
  children: JSX.Element;
}

const TaskProvider = ({ children }: TaskProviderTypes) => {
  const [task, setTask] = useState<TaskCreate>(defaultTask);

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
