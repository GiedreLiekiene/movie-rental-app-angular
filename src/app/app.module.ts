import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './components/home/home.component';
import { YourMoviesComponent } from './components/your-movies/your-movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RentedMoviesComponent } from './components/rented-movies/rented-movies.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MovieCardComponent,
    NavbarComponent,
    HomeComponent,
    YourMoviesComponent,
    ProfileComponent,
    RentedMoviesComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
