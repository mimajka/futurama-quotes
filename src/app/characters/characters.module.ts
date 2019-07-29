import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { CharactersComponent } from './characters.component';
import { QuotesModalComponent } from './quotes-modal/quotes-modal.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    CharactersComponent,
    QuotesModalComponent,
    QuoteComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
  ],
  entryComponents: [
    QuotesModalComponent
  ],
  exports: [
    CharactersComponent,
    QuotesModalComponent,
  ]
})
export class CharactersModule { }
