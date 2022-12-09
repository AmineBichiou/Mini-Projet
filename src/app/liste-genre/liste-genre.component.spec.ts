import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGenreComponent } from './liste-genre.component';

describe('ListeGenreComponent', () => {
  let component: ListeGenreComponent;
  let fixture: ComponentFixture<ListeGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
