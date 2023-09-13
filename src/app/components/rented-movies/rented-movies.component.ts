import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rented-movies',
  templateUrl: './rented-movies.component.html',
  styleUrls: ['./rented-movies.component.css'],
})
export class RentedMoviesComponent implements OnInit {
  yourMovies: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadYourMovies();
  }

  loadYourMovies() {
    this.yourMovies = [
      {
        name: 'Batman',
        genre: 'Action',
        time: '12h',
        price: '4.55$',
      },
      {
        name: 'Batman',
        genre: 'Action',
        time: '12h',
        price: '4.55$',
      },
    ];
  }

  removeMovie(movie: any) {
    const movieIndex = this.yourMovies.findIndex((m) => m.name === movie.name);
    if (movieIndex !== -1) {
      this.yourMovies.splice(movieIndex, 1);
      this.updateHomePageMovieList(movie.name);
    }
  }

  updateHomePageMovieList(movieName: string) {}
}
