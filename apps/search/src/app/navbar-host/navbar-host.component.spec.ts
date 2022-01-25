import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHostComponent } from './navbar-host.component';

describe('NavbarHostComponent', () => {
  let component: NavbarHostComponent;
  let fixture: ComponentFixture<NavbarHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
