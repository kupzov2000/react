async function GetFilms(searchFilm: string) {
  const searchFilmName = searchFilm.trim().split(' ').join('%20');

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
