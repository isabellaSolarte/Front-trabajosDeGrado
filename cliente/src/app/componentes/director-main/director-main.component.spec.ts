import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorMainComponent } from './director-main.component';

describe('DirectorMainComponent', () => {
  let component: DirectorMainComponent;
  let fixture: ComponentFixture<DirectorMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorMainComponent]
    });
    fixture = TestBed.createComponent(DirectorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
