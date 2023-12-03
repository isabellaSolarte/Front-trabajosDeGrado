import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefaturaAnteproyectoComponent } from './jefatura-anteproyecto.component';

describe('JefaturaAnteproyectoComponent', () => {
  let component: JefaturaAnteproyectoComponent;
  let fixture: ComponentFixture<JefaturaAnteproyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JefaturaAnteproyectoComponent]
    });
    fixture = TestBed.createComponent(JefaturaAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
