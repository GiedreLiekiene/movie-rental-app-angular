import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

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

  logout(): void {
    console.log('logout');
    sessionStorage.clear(); // Clear session data
    // Redirect to the login page
    this.router.navigate(['/login']);
    // Display a logout message
    alert('You have been logged out successfully.');
  }
}
