import './App.css'
import useRouter from './hooks/useRouter';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ImportPage from './pages/ImportPage';
import NotFoundPage from './pages/NotFoundPage';
import ReadPage from './pages/ReadPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';

function App() {

  const routes = {
    '/': <HomePage />,
    '/import': <ImportPage />,
    '/read': <ReadPage />,
    '/login': <LoginPage />,
    '/register': <RegisterPage />,
    '/dashboard': <Dashboard />
  };

  const router = useRouter();
  const routeResult: JSX.Element = router.route(routes);

  return (
    <Layout>
      {routeResult || <NotFoundPage />}
    </Layout>
    )
}

export default App
