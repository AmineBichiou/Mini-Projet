import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmComponent } from './film/film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { RechercheGenreComponent } from './recherche-genre/recherche-genre.component';
import { ListeGenreComponent } from './liste-genre/liste-genre.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FilmGuard } from './film.guard';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path: "Film", component : FilmComponent},
  {path: "addFilm", component : AddFilmComponent,canActivate:[FilmGuard]},
  { path: "", redirectTo: "Film", pathMatch: "full" },
  {path: "updateFilm/:id", component: UpdateFilmComponent,canActivate:[FilmGuard]},
  {path: "RechercheGenre", component : RechercheGenreComponent},
  {path: "listeGenre", component : ListeGenreComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
