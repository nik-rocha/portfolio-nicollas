import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducarDialogComponent } from './educar-dialog.component';

describe('EducarDialogComponent', () => {
  let component: EducarDialogComponent;
  let fixture: ComponentFixture<EducarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducarDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
