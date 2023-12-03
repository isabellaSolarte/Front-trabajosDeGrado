import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorRegistrosComponent } from './coordinador-registros.component';

describe('CoordinadorRegistrosComponent', () => {
  let component: CoordinadorRegistrosComponent;
  let fixture: ComponentFixture<CoordinadorRegistrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinadorRegistrosComponent]
    });
    fixture = TestBed.createComponent(CoordinadorRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
