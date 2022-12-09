import { Genre } from './../model/genre.model';
import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recherche-genre',
  templateUrl: './recherche-genre.component.html',
  styleUrls: ['./recherche-genre.component.css']
})
export class RechercheGenreComponent implements OnInit {
  Film : Film[] = [];
  Genre : Genre[] = [];
  idGenre! : number;
  constructor(private filmService :FilmService,public authService:AuthService) { }

  /*ngOnInit(): void {
    this.Genre = this.filmService.listeGenre();
    this.Film=this.filmService.listeFilm();
  }*/
  ngOnInit(): void {
    this.filmService.listeGenre().
    subscribe(gen => {
      this.Genre = gen._embedded.genres;
    console.log(gen);
    });
    }
    
  /*onChange() {
     this.Film =  this.filmService.rechercheGenre(this.IdGenre);
     console.log(this.Film);
     
     }*/
     onChange() {
      this.filmService.rechercherGenre(this.idGenre).
      subscribe(gen  =>{
        this.Film=gen});
      }
     supprimerFilm(f: Film)
{
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.filmService.supprimerFilm(f.idFilm);
}

}
