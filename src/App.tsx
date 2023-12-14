import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import NavigationBar from './NavigationBar';
import LoginPage from './LoginPage';
import Categories from './Categories';

const Layout = (): React.JSX.Element => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/category/men', element: <Categories category="men" /> },
      { path: '/category/women', element: <p>Women</p> },
      { path: '/category/children', element: <p>Children</p> },
      { path: '/about', element: <p>About</p> },
      { path: '/basket', element: <p>Basket</p> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
]);

const App = (): React.JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
