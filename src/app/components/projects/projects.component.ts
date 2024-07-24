import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { CommonModule } from '@angular/common';
import { QuirinosDialogComponent } from '../dialogs/quirinos-dialog/quirinos-dialog.component';
import { EquivalerDialogComponent } from '../dialogs/equivaler-dialog/equivaler-dialog.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(public dialog: MatDialog) {}

  openQuirinosDialog(): void {
    const dialogRef = this.dialog.open(QuirinosDialogComponent, {
      width: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado.')
    })
  }

  openEquivalerDialog(): void {
    const dialogRef = this.dialog.open(EquivalerDialogComponent, {
      width: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado.')
    })
  }

}
