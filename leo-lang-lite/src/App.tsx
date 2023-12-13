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

  const router = useRouter();

  const routeResult = router.route(routes);

  return routeResult || <NotFoundPage />
}

export default App
