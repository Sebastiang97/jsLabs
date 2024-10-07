import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyToCloudComponent } from './journey-to-cloud.component';

describe('JourneyToCloudComponent', () => {
  let component: JourneyToCloudComponent;
  let fixture: ComponentFixture<JourneyToCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JourneyToCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyToCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
