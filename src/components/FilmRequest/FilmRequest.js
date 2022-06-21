import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Film from '../Film/Film';
import NotFound from '../NotFound/NotFound';

const FilmRequest = () => {
  const [filmData, setFilmData] = useState({});
  const [userInput, setUserInput] = useState('click');

  const fetchMovie = () => {
    axios.get(`http://www.omdbapi.com/?apikey=509e2306&t=${userInput}`).then((res) => {
      setFilmData(res.data);
    });
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const submitFilm = (e) => {
    e.preventDefault();
    fetchMovie();
  };

  useEffect(() => {
    fetchMovie();
  }, [userInput]);

  const { Title, Plot, Actors, Error } = filmData;

  return (
    <div>
      <input type='text' onChange={handleUserInput} />
      <button onClick={submitFilm}>Find Film</button>
      {filmData.Response === 'True' && <Film title={Title} plot={Plot} actors={Actors} />}
      {filmData.Response === 'False' && <NotFound error={Error} />}
    </div>
  );
};

export default FilmRequest;
