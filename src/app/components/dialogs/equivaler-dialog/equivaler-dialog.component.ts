import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-equivaler-dialog',
  standalone: true,
  template: `
    <gallery [items]="images"></gallery>
  `,
  imports: [CommonModule, MatDialogModule, GalleryModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './equivaler-dialog.component.scss'
})
export class EquivalerDialogComponent implements OnInit {
  images: GalleryItem[];

  ngOnInit() {
    this.images = [
      new ImageItem({ src: 'equivaler_screenshots/equivaler_1.jpg', thumb: 'equivaler_screenshots/equivaler_1.jpg' }),
      new ImageItem({ src: 'equivaler_screenshots/equivaler_2.png', thumb: 'equivaler_screenshots/equivaler_2.png' }),
      new ImageItem({ src: 'equivaler_screenshots/equivaler_3.png', thumb: 'equivaler_screenshots/equivaler_3.png' }),
      new ImageItem({ src: 'equivaler_screenshots/equivaler_4.png', thumb: 'equivaler_screenshots/equivaler_4.png' }),
      new ImageItem({ src: 'equivaler_screenshots/equivaler_5.png', thumb: 'equivaler_screenshots/equivaler_5.png' })
    ]
  }
}
