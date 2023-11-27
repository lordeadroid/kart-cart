import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';

const router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);

const App = (): React.JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
