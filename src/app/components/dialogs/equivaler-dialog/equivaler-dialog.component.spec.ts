import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalerDialogComponent } from './equivaler-dialog.component';

describe('EquivalerDialogComponent', () => {
  let component: EquivalerDialogComponent;
  let fixture: ComponentFixture<EquivalerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquivalerDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquivalerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
