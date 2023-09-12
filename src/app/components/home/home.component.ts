import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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