import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheGenreComponent } from './recherche-genre.component';

describe('RechercheGenreComponent', () => {
  let component: RechercheGenreComponent;
  let fixture: ComponentFixture<RechercheGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
