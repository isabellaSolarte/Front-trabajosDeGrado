import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluadorRegistrosComponent } from './evaluador-registros.component';

describe('EvaluadorRegistrosComponent', () => {
  let component: EvaluadorRegistrosComponent;
  let fixture: ComponentFixture<EvaluadorRegistrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluadorRegistrosComponent]
    });
    fixture = TestBed.createComponent(EvaluadorRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
