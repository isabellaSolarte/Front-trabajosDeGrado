import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluadoresComponent } from './evaluadores.component';

describe('EvaluadoresComponent', () => {
  let component: EvaluadoresComponent;
  let fixture: ComponentFixture<EvaluadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluadoresComponent]
    });
    fixture = TestBed.createComponent(EvaluadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
