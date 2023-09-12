import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    //Load movies when the component is initialized
    this.loadMovies();
  }

  loadMovies() {
    //use the movieService to get the movies
    this.movies = this.movieService.getMovies();
  }

  rentMovie(movieName: string) {
    this.movieService.rentMovie(movieName);
  }
}
