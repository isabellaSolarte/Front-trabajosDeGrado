import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorComentariosComponent } from './coordinador-comentarios.component';

describe('CoordinadorComentariosComponent', () => {
  let component: CoordinadorComentariosComponent;
  let fixture: ComponentFixture<CoordinadorComentariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinadorComentariosComponent]
    });
    fixture = TestBed.createComponent(CoordinadorComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
