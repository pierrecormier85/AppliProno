import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResetPasswordDialogComponent } from './user-reset-password-dialog.component';


describe('UserResetPasswordDialogComponent', () => {
  let component: UserResetPasswordDialogComponent;
  let fixture: ComponentFixture<UserResetPasswordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResetPasswordDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResetPasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
