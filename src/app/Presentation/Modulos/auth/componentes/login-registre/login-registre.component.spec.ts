import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistreComponent } from './login-registre.component';

describe('LoginRegistreComponent', () => {
  let component: LoginRegistreComponent;
  let fixture: ComponentFixture<LoginRegistreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegistreComponent]
    });
    fixture = TestBed.createComponent(LoginRegistreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
