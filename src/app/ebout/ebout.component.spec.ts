import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EboutComponent } from './ebout.component';

describe('EboutComponent', () => {
  let component: EboutComponent;
  let fixture: ComponentFixture<EboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
