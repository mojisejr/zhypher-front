import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionZoneComponent } from './connection-zone.component';

describe('ConnectionZoneComponent', () => {
  let component: ConnectionZoneComponent;
  let fixture: ComponentFixture<ConnectionZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
