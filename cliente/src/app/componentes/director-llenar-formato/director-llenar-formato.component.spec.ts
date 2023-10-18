import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorComponent } from './director-llenar-formato.component';

describe('DirectorComponent', () => {
  let component: DirectorComponent;
  let fixture: ComponentFixture<DirectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorComponent]
    });
    fixture = TestBed.createComponent(DirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
