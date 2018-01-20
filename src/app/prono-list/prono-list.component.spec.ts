import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoListComponent } from './prono-list.component';

describe('PronoListComponent', () => {
  let component: PronoListComponent;
  let fixture: ComponentFixture<PronoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
