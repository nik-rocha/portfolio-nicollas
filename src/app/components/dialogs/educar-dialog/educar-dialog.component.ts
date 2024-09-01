import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-educar-dialog',
  standalone: true,
  template: `
    <gallery [items]="images"></gallery>
  `,
  imports: [CommonModule, MatDialogModule, GalleryModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './educar-dialog.component.scss'
})
export class EducarDialogComponent implements OnInit {
  images: GalleryItem[];

  ngOnInit() {
    this.images = [
      new ImageItem({ src: 'educar_screenshots/educar_1.png', thumb: 'educar_screenshots/educar_1.png' }),
      new ImageItem({ src: 'educar_screenshots/educar_2.png', thumb: 'educar_screenshots/educar_2.png' }),
      new ImageItem({ src: 'educar_screenshots/educar_3.png', thumb: 'educar_screenshots/educar_3.png' }),
      new ImageItem({ src: 'educar_screenshots/educar_4.png', thumb: 'educar_screenshots/educar_4.png' }),
      new ImageItem({ src: 'educar_screenshots/educar_5.png', thumb: 'educar_screenshots/educar_5.png' }),
      new ImageItem({ src: 'educar_screenshots/educar_journeys.png', thumb: 'educar_screenshots/educar_journeys.png' }),
      new ImageItem({ src: 'educar_screenshots/educar_6.png', thumb: 'educar_screenshots/educar_6.png' }),
      new ImageItem({ src: 'educar_screenshots/educar_7.png', thumb: 'educar_screenshots/educar_7.png' }),
      new ImageItem({ src: 'educar_screenshots/educar_8.png', thumb: 'educar_screenshots/educar_8.png' })
    ]
  }
}
