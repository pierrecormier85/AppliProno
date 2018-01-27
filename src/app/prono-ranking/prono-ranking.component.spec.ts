import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoRankingComponent } from './prono-ranking.component';

describe('PronoRankingComponent', () => {
  let component: PronoRankingComponent;
  let fixture: ComponentFixture<PronoRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
