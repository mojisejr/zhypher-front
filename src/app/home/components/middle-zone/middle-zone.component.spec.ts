import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleZoneComponent } from './middle-zone.component';

describe('MiddleZoneComponent', () => {
  let component: MiddleZoneComponent;
  let fixture: ComponentFixture<MiddleZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
