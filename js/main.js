"use strict";

const numberOfFilms = prompt('Количество', '');
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false 
      };



for(let i = 0; i < 2; i++ ){
    const a = prompt('Последний', ''),
          b = +prompt('Оценка', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50){
      personalMovieDB.movies[a] = b;
      console.log('Good');
    } else{
      console.log('error');
      i--;
    }
}

if (personalMovieDB.count < 10){
    console.log('Слишком мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Довольно много фильмов');
} else if (personalMovieDB.count > 30){
    console.log('Киноман');
}else{
  console.log('error');
}

console.log(personalMovieDB);

