import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMainScreenComponent } from './customer-main-screen.component';

describe('CustomerMainScreenComponent', () => {
  let component: CustomerMainScreenComponent;
  let fixture: ComponentFixture<CustomerMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMainScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
