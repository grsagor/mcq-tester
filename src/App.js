import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';
import Main from './Layout/Main';
import TopicQuiz from './Components/TopicQuiz/TopicQuiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>

        <Main></Main>
      </div>,
      children: [
        {
          path: 'topics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
        {
          path: '/',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <div>
            <div className='w-3/4 mx-auto'>
              <h1 className='font-bold text-2xl mb-2 border border-lime-600'>Welcome to <span className='text-lime-600'>MCQ Tester</span></h1>
            </div>
            <Topics></Topics></div>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/topic/:TopicID',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.TopicID}`);
          },
          element: <TopicQuiz></TopicQuiz>
        }
      ]
    },
    {
      path: '*',
      element: <div>This route not found.</div>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
