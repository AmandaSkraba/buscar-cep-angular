import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucarCepComponent } from './bucar-cep.component';

describe('BucarCepComponent', () => {
  let component: BucarCepComponent;
  let fixture: ComponentFixture<BucarCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucarCepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucarCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
