import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoFormComponent } from './prono-form.component';

describe('PronoFormComponent', () => {
  let component: PronoFormComponent;
  let fixture: ComponentFixture<PronoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
