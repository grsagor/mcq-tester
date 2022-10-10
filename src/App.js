import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>This is home</div>
    },
    {
      path: 'topics',
      element: <div>This is topics</div>
    },
    {
      path: 'statistics',
      element: <div>This is statistics</div>
    },
    {
      path: 'blogs',
      element: <div>This is blogs</div>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
