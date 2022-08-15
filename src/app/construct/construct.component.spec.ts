import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructComponent } from './construct.component';

describe('ConstructComponent', () => {
  let component: ConstructComponent;
  let fixture: ComponentFixture<ConstructComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
