import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film.model';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent implements OnInit {
  currentFilm = new Film();
  Genre! : Genre[];
  updatedGenreId! : number;


  constructor( private activatedRoute: ActivatedRoute, private router : Router,private filmService: FilmService) { }

  /*ngOnInit(): void {
    this.Genre = this.filmService.listeGenre();
    this.currentFilm = this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']);
    this.updatedGenreId=this.currentFilm.Genre.idGenre;
  }*/
  /*ngOnInit() {
    this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']).
     subscribe( prod =>{ this.currentFilm = prod; } ) ;
    }*/
    /*ngOnInit(): void {
      this.filmService.listeGenre().subscribe(gens => {this.Genre = gens;
      console.log(gens);
      });
      ²this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']).
      subscribe( prod =>{ this.currentFilm = prod;
      this.updatedGenreId =
      this.currentFilm.Genre.idGenre;
      } ) ;
      }*/
      ngOnInit(): void {
        this.filmService.listeGenre().
        subscribe(gen  => {console.log(gen);
        this.Genre = gen._embedded.genres;
        }
        );
        this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']).
        subscribe( gen =>{ this.currentFilm = gen;
        this.updatedGenreId = this.currentFilm.genre.idGenre;
        } ) ;
        }
    
 /* updateFilm()
{
  this.currentFilm.Genre=this.filmService.consulterGenre(this.updatedGenreId);
this.filmService.updateFilm(this.currentFilm);
this.router.navigate(['Film']);
}*/
/*updateFilm() {
  this.filmService.updateFilm(this.currentFilm).subscribe(prod => {
  this.router.navigate(['Film']); }
  );
  }*/
  updateFilm() {
    this.currentFilm.genre = this.Genre.
     find(gen => gen.idGenre == this.updatedGenreId)!;
    this.filmService.updateFilm(this.currentFilm).subscribe(gen => {
    this.router.navigate(['Film']); }
    );
    }
}

