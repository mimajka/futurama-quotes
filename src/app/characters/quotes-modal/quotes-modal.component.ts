import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CharactersComponent} from '../characters.component';
import {CharactersService} from '../../services/characters.service';
import {Observable} from 'rxjs';
import {Character} from '../../models/character';
import {map} from 'rxjs/operators';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-quotes-modal',
  templateUrl: './quotes-modal.component.html',
  styleUrls: ['./quotes-modal.component.scss']
})
export class QuotesModalComponent implements OnInit {
  quotes$: Observable<string[]>;

  constructor(public dialogRef: MatDialogRef<CharactersComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private charactersService: CharactersService) { }

  ngOnInit() {
    this.quotes$ = this.charactersService.getCharacters([this.data.name], 5).pipe(
        map( (results: Character[]) => results[0].quotes)
    )
  }

  closeModal() {
    this.dialogRef.close();
  }

}
