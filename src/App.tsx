import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import NavigationBar from './NavigationBar';

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
    children: [{ path: '/', element: <HomePage /> }],
  },
]);

const App = (): React.JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
