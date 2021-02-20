import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorysComponent } from './historys.component';

describe('HistorysComponent', () => {
  let component: HistorysComponent;
  let fixture: ComponentFixture<HistorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
