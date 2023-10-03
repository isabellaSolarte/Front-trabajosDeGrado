import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorCrearComponent } from './administrador-crear.component';

describe('AdministradorCrearComponent', () => {
  let component: AdministradorCrearComponent;
  let fixture: ComponentFixture<AdministradorCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministradorCrearComponent]
    });
    fixture = TestBed.createComponent(AdministradorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
