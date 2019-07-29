import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesModalComponent } from './quotes-modal.component';

describe('QuotesModalComponent', () => {
  let component: QuotesModalComponent;
  let fixture: ComponentFixture<QuotesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
