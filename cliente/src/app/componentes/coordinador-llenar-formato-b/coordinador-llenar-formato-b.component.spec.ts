import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorLlenarFormatoBComponent } from './coordinador-llenar-formato-b.component';

describe('CoordinadorLlenarFormatoBComponent', () => {
  let component: CoordinadorLlenarFormatoBComponent;
  let fixture: ComponentFixture<CoordinadorLlenarFormatoBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoordinadorLlenarFormatoBComponent]
    });
    fixture = TestBed.createComponent(CoordinadorLlenarFormatoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
