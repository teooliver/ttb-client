import TaskProvider from '../src/context/TaskContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import '../src/styles/reset.css';
import '../src/styles/variables.css';
import '../src/styles/global.css';
import 'react-datepicker/dist/react-datepicker.css';
import '@reach/listbox/styles.css';
import '@reach/dialog/styles.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#262d31',
      },
    ],
  },
};
const queryClient = new QueryClient();
export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <TaskProvider>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </TaskProvider>
    </QueryClientProvider>
  ),
];

// TODO: Use REACT_APP_ENV for this
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('../src/mocks/browser');
  worker.start();
}
