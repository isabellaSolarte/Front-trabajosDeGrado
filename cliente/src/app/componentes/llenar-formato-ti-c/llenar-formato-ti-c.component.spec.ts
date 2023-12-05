import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlenarFormatoTICComponent } from './llenar-formato-ti-c.component';

describe('LlenarFormatoTICComponent', () => {
  let component: LlenarFormatoTICComponent;
  let fixture: ComponentFixture<LlenarFormatoTICComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlenarFormatoTICComponent]
    });
    fixture = TestBed.createComponent(LlenarFormatoTICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
