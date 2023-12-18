import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import Error from './pages/Error';
import HomePage from './pages/HomePage';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/test1',
        element: <h1>test1</h1>,
      },
      {
        path: '/test2',
        element: <h1>test2</h1>,
      },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
