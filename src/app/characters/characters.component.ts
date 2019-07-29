import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { MatDialog } from '@angular/material';
import {QuotesModalComponent} from './quotes-modal/quotes-modal.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
    characters$: Observable<Character[]>;

  constructor(private charactersService: CharactersService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    const characterNames = ['bender', 'leela', 'professor-farnsworth', 'amy', 'zapp-brannigan', 'lurr', 'dr-zoidberg', 'fry', 'hermes', 'giant-bender'];
    this.characters$ = this.charactersService.getCharacters(characterNames);
  }

  showMoreQuotes(name: string): void {
    const dialogRef = this.dialog.open(QuotesModalComponent, {
      width: '400px',
      data: {name: name}
    });
  }
}
