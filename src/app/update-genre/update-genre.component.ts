import { Genre } from './../model/genre.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.css']
})
export class UpdateGenreComponent implements OnInit {
@Input()
Genre! : Genre;
@Output()
genreUpdated = new EventEmitter<Genre>();
@Input()
ajout!:boolean;


  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  saveGenre(){
    this.genreUpdated.emit(this.Genre);
    }
    

}
