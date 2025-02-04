import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './features/About/About';
import Movies, { MoviesFetch } from './features/Movies/Movies';
import { Provider } from 'react-redux';
import store from './store';
import MovieDetails from './features/Movies/MovieDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}>
      <App />
    </Provider>,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/movies",
        element: <MoviesFetch />
      },
      {
        path: "/movies/:id", element: <MovieDetails />
      },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
