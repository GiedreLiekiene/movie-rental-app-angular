import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class YourMoviesService {
  private yourMovies: any[] = [
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

  constructor() {}

  getYourMovies(): any[] {
    return this.yourMovies;
  }

  updateHomePageMovieList(movieName: string): void {}
}
