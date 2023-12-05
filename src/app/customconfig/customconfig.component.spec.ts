import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomconfigComponent } from './customconfig.component';

describe('CustomconfigComponent', () => {
  let component: CustomconfigComponent;
  let fixture: ComponentFixture<CustomconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomconfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
