import './App.css'
import useRouter from './hooks/useRouter';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import ImportPage from './pages/ImportPage';
import NotFoundPage from './pages/NotFoundPage';
import ReadPage from './pages/ReadPage';
import Navbar from './components/Navbar';

function App() {

  const routes = {
    '/': <HomePage />,
    '/import': <ImportPage />,
    '/read': <ReadPage />
  };

  const router = useRouter();
  const routeResult: JSX.Element = router.route(routes);

  return (
    <Layout>
      {router.currentRoute() !== "/read" && <Navbar/>}
      {routeResult || <NotFoundPage />}
    </Layout>
    )
}

export default App
