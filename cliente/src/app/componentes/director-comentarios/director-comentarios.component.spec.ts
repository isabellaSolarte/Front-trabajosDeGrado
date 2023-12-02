import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorComentariosComponent } from './director-comentarios.component';

describe('DirectorComentariosComponent', () => {
  let component: DirectorComentariosComponent;
  let fixture: ComponentFixture<DirectorComentariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorComentariosComponent]
    });
    fixture = TestBed.createComponent(DirectorComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
