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

  decrementRentalTime(movie: any) {
    // Decrement the rental time by 12 hours, but not below 12 hours
    const rentalTimeInHours = parseInt(movie.time);
    if (rentalTimeInHours > 12) {
      movie.time = rentalTimeInHours - 12 + 'h';
    }
  }

  incrementRentalTime(movie: any) {
    // Increment the rental time by 12 hours, but not above 168 hours (1 week)
    const rentalTimeInHours = parseInt(movie.time);
    if (rentalTimeInHours < 168) {
      movie.time = rentalTimeInHours + 12 + 'h';
    }
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
