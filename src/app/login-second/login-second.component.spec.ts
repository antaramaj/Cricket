import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSecondComponent } from './login-second.component';

describe('LoginSecondComponent', () => {
  let component: LoginSecondComponent;
  let fixture: ComponentFixture<LoginSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
