import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigassistComponent } from './configassist.component';

describe('ConfigassistComponent', () => {
  let component: ConfigassistComponent;
  let fixture: ComponentFixture<ConfigassistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigassistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigassistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
