import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoListHistoryComponent } from './prono-list-history.component';

describe('PronoListHistoryComponent', () => {
  let component: PronoListHistoryComponent;
  let fixture: ComponentFixture<PronoListHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoListHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoListHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
