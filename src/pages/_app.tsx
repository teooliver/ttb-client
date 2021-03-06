import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/global.css';
import { AuthProvider } from '../context/AuthContext/AuthContext';
import { Navbar } from '../components/Navbar/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { TaskProvider } from '../context/TaskContext/TaskContext';
import styles from '../components/AppRoutes/AppRoutes.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import '@reach/listbox/styles.css';
import '@reach/dialog/styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 20, // globally default to 20 seconds
    },
  },
});

// if (process.env.REACT_APP_ENV === 'enable_mockups') {
//   const { worker } = require('../../mocks/browser');

//   worker.start();
// }

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../mocks');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskProvider>
        <AuthProvider>
          <div className='App'>
            <Navbar />
            <section aria-label='application area' className={styles.AppRoutes}>
              <Component {...pageProps} />
            </section>
          </div>
        </AuthProvider>
      </TaskProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
