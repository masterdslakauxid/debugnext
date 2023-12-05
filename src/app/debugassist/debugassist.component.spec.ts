import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugassistComponent } from './debugassist.component';

describe('DebugassistComponent', () => {
  let component: DebugassistComponent;
  let fixture: ComponentFixture<DebugassistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugassistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebugassistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
