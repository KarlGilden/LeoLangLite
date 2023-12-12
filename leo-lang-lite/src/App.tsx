import './App.css'
import useRouter from './hooks/useRouter';
import HomePage from './pages/HomePage';
import ImportPage from './pages/ImportPage';
import NotFoundPage from './pages/NotFoundPage';
import ReadPage from './pages/ReadPage';

function App() {

  const routes = {
    '/': <HomePage />,
    '/import': <ImportPage />,
    '/read': <ReadPage />
  };

  const routeResult = useRouter(routes);

  return routeResult || <NotFoundPage />
}

export default App
