import { FilmService } from './../services/film.service';
import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { Router } from '@angular/router';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {
  newFilm = new Film();
  Genre! : Genre[];
  newIdGenre! : number;
  newGenre! : Genre;
  constructor(private filmService :FilmService,private router : Router) { }
  /*addFilm(){
    this.filmService.ajouterFilm(this.newFilm).subscribe(prod => {
console.log(prod);
this.router.navigate(['Film']);
});

  }*/
  addFilm(){
    this.newFilm.genre = this.Genre.find(gen => gen.idGenre == this.newIdGenre)!;//dont forget
    this.filmService.ajouterFilm(this.newFilm)
    .subscribe(prod => {
    console.log(prod);
    this.router.navigate(['Film']);
    });
    }
  /*ngOnInit(): void {
    this.filmService.listeGenre().
    subscribe(gen => {this.Genre = gen;
    console.log(gen);
    });
    
  }*/
  ngOnInit(): void {
    this.filmService.listeGenre().
    subscribe(gen=> {console.log(gen);
   this.Genre = gen._embedded.genres;
    }
    );
    }
    
    

}
