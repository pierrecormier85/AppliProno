import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoRankingHistoryComponent } from './prono-ranking-history.component';

describe('PronoRankingHistoryComponent', () => {
  let component: PronoRankingHistoryComponent;
  let fixture: ComponentFixture<PronoRankingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoRankingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoRankingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
