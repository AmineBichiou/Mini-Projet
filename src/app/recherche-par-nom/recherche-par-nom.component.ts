import { FilmService } from './../services/film.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  nomFilm! :string;
  Film!:Film[];
  allFilms! : Film[];
searchTerm!: string;

  constructor(public filmService : FilmService) { }
  onKeyUp(filterText : string){
    this.Film = this.allFilms.filter(item =>
    item.nomFilm.toLowerCase().includes(filterText));
    }

  ngOnInit(): void {
    this.filmService.listeFilm().subscribe(prods => {
      console.log(prods);
      this.allFilms = prods;
      });
  }
  rechercherProds(){
    this.filmService.rechercherParNom(this.nomFilm).
subscribe(prods => {
this.Film = prods;
console.log(prods)});
    

}
}
