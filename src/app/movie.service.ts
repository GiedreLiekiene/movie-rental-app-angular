import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = [
    { name: 'Movie 1', genre: 'Action', price: '4.55$', stockCount: 5 },
    { name: 'Movie 2', genre: 'Comedy', price: '3.99$', stockCount: 0 },
    { name: 'Movie 3', genre: 'Drama', price: '6.25$', stockCount: 2 },
    { name: 'Movie 4', genre: 'Thriller', price: '5.75$', stockCount: 0 },
    { name: 'Movie 5', genre: 'Adventure', price: '7.50$', stockCount: 3 },
    { name: 'Movie 6', genre: 'Sci-Fi', price: '6.99$', stockCount: 1 },
    { name: 'Movie 7', genre: 'Romance', price: '4.25$', stockCount: 0 },
    { name: 'Movie 8', genre: 'Horror', price: '4.99$', stockCount: 4 },
  ];
  constructor() {}

  getMovies() {
    return this.movies;
  }

  rentMovie(movieName: string) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );
    if (movieIndex !== -1 && this.movies[movieIndex].stockCount > 0) {
      this.movies[movieIndex].stockCount--;
    }
  }
}
