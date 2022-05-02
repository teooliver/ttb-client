import { AppRoutes } from './components/AppRoutes/AppRoutes';
import Navbar from './components/Navbar/Navbar';
import { AuthProvider } from './context/AuthContext/AuthContext';
import './styles/reset.css';
import './styles/variables.css';
import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Navbar />
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
