import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorAnteproyectoComponent } from './director-anteproyecto.component';

describe('DirectorAnteproyectoComponent', () => {
  let component: DirectorAnteproyectoComponent;
  let fixture: ComponentFixture<DirectorAnteproyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorAnteproyectoComponent]
    });
    fixture = TestBed.createComponent(DirectorAnteproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
