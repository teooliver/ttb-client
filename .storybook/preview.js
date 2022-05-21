import * as NextImage from 'next/image';
// import TaskProvider from '../src/context/TaskContext';
import TaskProvider from '../src/context/TaskContext/TaskContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../src/styles/reset.css';
import '../src/styles/variables.css';
import '../src/styles/global.css';
import 'react-datepicker/dist/react-datepicker.css';
import '@reach/listbox/styles.css';
import '@reach/dialog/styles.css';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

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
  viewport: { viewports: customViewports },
};
const queryClient = new QueryClient();
export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <TaskProvider>
        <Story />
      </TaskProvider>
    </QueryClientProvider>
  ),
];

// TODO: Use REACT_APP_ENV for this
// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('../src/mocks/browser');
//   worker.start();
// }
