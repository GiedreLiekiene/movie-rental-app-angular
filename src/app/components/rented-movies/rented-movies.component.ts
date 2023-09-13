import { Component, OnInit } from '@angular/core';
import { YourMoviesService } from 'src/app/services/your-movies.service';

@Component({
  selector: 'app-rented-movies',
  templateUrl: './rented-movies.component.html',
  styleUrls: ['./rented-movies.component.css'],
})
export class RentedMoviesComponent implements OnInit {
  yourMovies: any[] = [];

  constructor(private YourMoviesService: YourMoviesService) {}

  ngOnInit(): void {
    this.loadYourMovies();
  }

  loadYourMovies() {
    this.yourMovies = this.YourMoviesService.getYourMovies();
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
