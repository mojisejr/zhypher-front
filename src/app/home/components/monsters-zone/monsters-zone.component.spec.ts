import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersZoneComponent } from './monsters-zone.component';

describe('MonstersZoneComponent', () => {
  let component: MonstersZoneComponent;
  let fixture: ComponentFixture<MonstersZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstersZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstersZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
