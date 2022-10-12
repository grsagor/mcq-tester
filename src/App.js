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
          element: <div className='mb-12'>
            <div className='w-3/4 mx-auto p-12 my-20 md:p-40 shadow-2xl shadow-black welcome-message'>
              <h1 className='font-bold text-white text-2xl mb-2 shadow-2xl shadow-white'>Welcome to <span className='text-lime-600'>MCQ Tester, </span>
              Do you worried about your IQ on programming objects? You have come to the perfect place. Now, test your IQ on any programming language from our website. Best of Luck!
              </h1>
            </div>
            <Topics></Topics></div>
        },
        {
          path: 'statistics',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics></Statistics>
        },
        {
          path: 'blogs',
          loader: () => {
            return fetch('blog.json');
          },
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
