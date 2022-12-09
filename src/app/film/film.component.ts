import { FilmService } from './../services/film.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
    Film : Film[] = [];
  constructor(private filmService :FilmService,public authService:AuthService) { 
    //this.Film=filmService.listeFilm();
  }
  /*supprimerFilm(f: Film)
{
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.filmService.supprimerFilm(f);
}*/
ngOnInit(): void {
  this.chargerFilm();
  }
  chargerFilm(){
  this.filmService.listeFilm().subscribe(gen => {
  console.log(gen);
  this.Film = gen;
  });
  }
  supprimerFilm(f: Film)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.filmService.supprimerFilm(f.idFilm).subscribe(() => {
  console.log("Film supprimé");
  this.chargerFilm();
  });
  } 

/*ngOnInit(): void {
  this.filmService.listeFilm().subscribe(prods => {
  console.log(prods);
  this.Film = prods;
  });
  }*/
  

}

