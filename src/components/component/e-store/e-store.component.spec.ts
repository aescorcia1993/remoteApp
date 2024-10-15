import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStoreComponent } from './e-store.component';

describe('EStoreComponent', () => {
  let component: EStoreComponent;
  let fixture: ComponentFixture<EStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EStoreComponent]
    });
    fixture = TestBed.createComponent(EStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
