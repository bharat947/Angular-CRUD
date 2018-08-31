import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup , FormBuilder ,Validators, NgForm} from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Login form test case
   /*
  it('Login will failed !',async(()=>{
 LoginComponent.loginForm.controls['username'].setValue('');
 LoginComponent.loginForm.controls['password'].setValue('');
 expect(LoginComponent.loginForm.vaild).toBeFalsy();

  }));
   it('Login form valid !',async(()=>{
 LoginComponent.loginForm.controls['username'].setValue('bharat');
 LoginComponent.loginForm.controls['password'].setValue('bharat');
 expect(LoginComponent.loginForm.vaild).toBeTruthy();
  }));
*/
});
