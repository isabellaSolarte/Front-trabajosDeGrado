import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefaturaRegistrosComponent } from './jefatura-registros.component';

describe('JefaturaRegistrosComponent', () => {
  let component: JefaturaRegistrosComponent;
  let fixture: ComponentFixture<JefaturaRegistrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JefaturaRegistrosComponent]
    });
    fixture = TestBed.createComponent(JefaturaRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
