import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueFilterComponent } from './venue-filter.component';

describe('VenueFilterComponent', () => {
  let component: VenueFilterComponent;
  let fixture: ComponentFixture<VenueFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
