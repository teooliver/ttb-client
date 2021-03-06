import { cleanup, render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../../context/AuthContext/AuthContext';
import { Navbar } from './Navbar';

afterAll(cleanup);

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    };
  },
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('Test Navbar Component', () => {
  test('Render Navbar', async () => {
    const Wrapper = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Navbar />
          </AuthProvider>
        </QueryClientProvider>
      );
    };

    const { getByTestId } = render(<Wrapper />);

    expect(getByTestId('navbar')).toBeInTheDocument();
  });
  test('Check main pages are present', async () => {
    const Wrapper = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Navbar />
          </AuthProvider>
        </QueryClientProvider>
      );
    };

    const { getByText } = render(<Wrapper />);

    expect(getByText('Timer')).toBeInTheDocument();
    expect(getByText('Reports')).toBeInTheDocument();
    expect(getByText('Projects')).toBeInTheDocument();
    expect(getByText('Clients')).toBeInTheDocument();
    expect(getByText('Tags')).toBeInTheDocument();
  });

  test('Check Seed and Remove Data are present', async () => {
    const Wrapper = () => {
      return (
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Navbar />
          </AuthProvider>
        </QueryClientProvider>
      );
    };

    const { getByText } = render(<Wrapper />);

    expect(getByText('Seed Data')).toBeInTheDocument();
    expect(getByText('Remove All Data')).toBeInTheDocument();
  });
});
