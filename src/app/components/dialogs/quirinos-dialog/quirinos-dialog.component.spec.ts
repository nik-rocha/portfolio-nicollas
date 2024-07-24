import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuirinosDialogComponent } from './quirinos-dialog.component';

describe('QuirinosDialogComponent', () => {
  let component: QuirinosDialogComponent;
  let fixture: ComponentFixture<QuirinosDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuirinosDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuirinosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
