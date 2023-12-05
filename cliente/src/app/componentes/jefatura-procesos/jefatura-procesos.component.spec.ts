import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefaturaProcesosComponent } from './jefatura-procesos.component';

describe('JefaturaProcesosComponent', () => {
  let component: JefaturaProcesosComponent;
  let fixture: ComponentFixture<JefaturaProcesosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JefaturaProcesosComponent]
    });
    fixture = TestBed.createComponent(JefaturaProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
