"use strict";
const numberOfFilms = +prompt('Сколько фильмов?', '');
// console.log(numberOfFilms);
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  general: [],
  privat: false
};
const a = prompt('Последний', ''),
      b = prompt('Оценка', ''),
      c = prompt('Последний', ''),
      d = prompt('Оценка', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
