import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFilmComponent } from './update-film.component';

describe('UpdateFilmComponent', () => {
  let component: UpdateFilmComponent;
  let fixture: ComponentFixture<UpdateFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
