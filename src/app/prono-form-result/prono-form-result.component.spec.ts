import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoFormResultComponent } from './prono-form-result.component';

describe('PronoFormResultComponent', () => {
  let component: PronoFormResultComponent;
  let fixture: ComponentFixture<PronoFormResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoFormResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoFormResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
