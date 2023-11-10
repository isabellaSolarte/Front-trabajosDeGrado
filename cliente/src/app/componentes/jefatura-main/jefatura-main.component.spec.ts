import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JefaturaMainComponent } from './jefatura-main.component';

describe('JefaturaMainComponent', () => {
  let component: JefaturaMainComponent;
  let fixture: ComponentFixture<JefaturaMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JefaturaMainComponent]
    });
    fixture = TestBed.createComponent(JefaturaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
