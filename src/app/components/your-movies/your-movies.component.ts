import { Component, OnInit } from '@angular/core';
import { YourMoviesService } from 'src/app/services/your-movies.service';

@Component({
  selector: 'app-your-movies',
  templateUrl: './your-movies.component.html',
  styleUrls: ['./your-movies.component.css'],
})
export class YourMoviesComponent implements OnInit {
  yourMovies: any[] = []; // Declaring yourMovies as an array property

  constructor(private yourMoviesService: YourMoviesService) {}

  ngOnInit(): void {
    //loading yourMovies array when the component is initialized
    this.loadYourMovies();
  }

  loadYourMovies() {
    this.yourMovies = this.yourMoviesService.getYourMovies();
  }

  removeMovie(movie: any) {
    const movieIndex = this.yourMovies.findIndex((m) => m.name === movie.name);
    if (movieIndex !== -1) {
      this.yourMovies.splice(movieIndex, 1);
      // Update the table after removing the movie
      this.loadYourMovies();
      // Increment the count in stock value in the home page movie list
      this.updateHomePageMovieList(movie.name);
    }
  }

  updateHomePageMovieList(movieName: string) {
    // Assuming you have a service or method to update the home page movie list, replace with actual implementation
    // This method will typically update the stock count and UI in the home page
    this.yourMoviesService.updateHomePageMovieList(movieName);
  }
}
