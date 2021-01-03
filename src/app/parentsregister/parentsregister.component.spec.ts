import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsregisterComponent } from './parentsregister.component';

describe('ParentsregisterComponent', () => {
  let component: ParentsregisterComponent;
  let fixture: ComponentFixture<ParentsregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
