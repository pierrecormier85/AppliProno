import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoInfoComponent } from './prono-info.component';

describe('PronoInfoComponent', () => {
  let component: PronoInfoComponent;
  let fixture: ComponentFixture<PronoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
