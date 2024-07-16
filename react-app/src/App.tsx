import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/MainComp';
import GetFilms from './components/GetFilms';
import { StateApp } from './types/types';

function App() {
  const [data, setData] = useState<StateApp>(null);

  useEffect(() => {
    GetFilms()
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.log('Ошибка получения данных:', err);
      });
  }, []);

  const handleSearch = async () => {
    try {
      const data = await GetFilms();
      setData(data);
    } catch (error) {
      console.log('Ошибка при получении данных:', error);
      setData(null);
    }
  };

  return (
    <div className="wrapper">
      <Header handleFn={handleSearch} />
      {data && <Main data={data} />}
    </div>
  );
}

export default App;
