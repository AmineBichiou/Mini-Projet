import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-liste-genre',
  templateUrl: './liste-genre.component.html',
  styleUrls: ['./liste-genre.component.css']
})
export class ListeGenreComponent implements OnInit {
  Genre! : Genre[];
  updatedGenre:Genre = {"idGenre":0,"nomGenre":""};

  ajout:boolean=true;
  constructor(private filmService : FilmService,public authService:AuthService) { }

  ngOnInit(): void {
    this.chargerGenre();

  }
  chargerGenre(){
    this.filmService.listeGenre().
      subscribe(gen=> {
        this.Genre = gen._embedded.genres;
      console.log(gen);
    });
  }
  updateGenre(gen:Genre) {
    this.updatedGenre=gen;
    this.ajout=false;  
  }
  genreUpdated(gen:Genre){
    console.log("Genre updated event",gen);
    this.filmService.ajouterGenre(gen).subscribe( () =>  this.chargerGenre());
  }
  supprimerGenre(gen : Genre) {
    let conf = confirm("Etes-vous sûr ?");
       if (conf)
       {
         this.filmService.supprimerGenre(gen.idGenre).subscribe(() => {
          console.log("Genre supprimée");
          this.chargerGenre(); }  );
       }
  }

}
