import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluadorLlenarFormatoBComponent } from './evaluador-llenar-formato-b.component';

describe('EvaluadorLlenarFormatoBComponent', () => {
  let component: EvaluadorLlenarFormatoBComponent;
  let fixture: ComponentFixture<EvaluadorLlenarFormatoBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluadorLlenarFormatoBComponent]
    });
    fixture = TestBed.createComponent(EvaluadorLlenarFormatoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
