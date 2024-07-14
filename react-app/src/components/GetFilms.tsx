async function GetFilms() {
  const searchFilm = localStorage.getItem('movieName') || 'Star Wars';
  const searchFilmName = searchFilm.trim().split(' ').join('%20');
  if (searchFilm !== 'Star Wars') {
    localStorage.setItem('movieName', searchFilmName);
  }

  const url = `https://www.omdbapi.com/?s=${searchFilmName}&apikey=7f6f12ba`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    console.log('Ошибка запроса:', err);
    throw new Error(`${err}`);
  }
}

export default GetFilms;
