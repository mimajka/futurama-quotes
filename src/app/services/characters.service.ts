import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Character } from '../models/character';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient,
              private router: Router) { }

  getCharacters(characterNames: string[], quoteNumber = 1): Observable<Character[]>{
    const subscriptions = [];
    characterNames.forEach( name =>  subscriptions.push(
        this.http.get(`${environment.charactersUrl + name}/${quoteNumber}`).pipe(
            map(character => Character.fromRaw(character))
        ))
    );
    return forkJoin(...subscriptions).pipe(
        retry(3),
        catchError(err => this.handleError(err))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    this.router.navigate(['error']);
    return throwError('Something bad happened; please try again later.');
  };
}
