import * as ReactDOMClient from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import GetFilms from './components/GetFilms.tsx';

const root = ReactDOMClient.createRoot(document.getElementById('root')!);

const moviesLS = localStorage.getItem('movieName');
const movieSearch = moviesLS ? moviesLS : 'Star Wars';

GetFilms(movieSearch)
  .then((data) => {
    // console.log('Данные:', data);
    root.render(<App data={data} />);
  })
  .catch((err) => {
    console.log('Ошибка при получении данных:', err);
  });
