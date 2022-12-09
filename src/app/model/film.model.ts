import { Genre } from './genre.model';
export class Film {
    idFilm! : number;
    nomFilm! : string;
    rateFilm! : number;
    dateCreation! : Date ;
    genre! : Genre;
}
