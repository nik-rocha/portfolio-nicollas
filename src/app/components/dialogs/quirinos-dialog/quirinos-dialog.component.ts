import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, Renderer2 } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-quirinos-dialog',
  standalone: true,
  template: `
    <gallery [items]="images"></gallery>
  `,
  imports: [CommonModule, MatDialogModule, GalleryModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './quirinos-dialog.component.scss'
})
export class QuirinosDialogComponent implements OnInit {
  constructor(private _renderer: Renderer2) {}

  faX = faX;
  images: GalleryItem[];

  ngOnInit() {
    this.images = [
      new ImageItem({ src: 'quirinos_screenshots/quirinos_1.png', thumb: 'quirinos_screenshots/quirinos_1.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_2.png', thumb: 'quirinos_screenshots/quirinos_2.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_3.png', thumb: 'quirinos_screenshots/quirinos_3.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_4.png', thumb: 'quirinos_screenshots/quirinos_4.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_5.png', thumb: 'quirinos_screenshots/quirinos_5.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_6.png', thumb: 'quirinos_screenshots/quirinos_6.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_7.png', thumb: 'quirinos_screenshots/quirinos_7.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_8.png', thumb: 'quirinos_screenshots/quirinos_8.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_9.png', thumb: 'quirinos_screenshots/quirinos_9.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_10.png', thumb: 'quirinos_screenshots/quirinos_10.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_11.png', thumb: 'quirinos_screenshots/quirinos_11.png' }),
      new ImageItem({ src: 'quirinos_screenshots/quirinos_12.png', thumb: 'quirinos_screenshots/quirinos_12.png' })
    ]

    this._renderer.setStyle(document.body, 'overflow-y', 'hidden');
    this._renderer.setStyle(document.body, 'overflow-x', 'hidden');
  }

  ngOnDestroy(): void {
    this._renderer.removeStyle(document.body, 'overflow-y');
  }
}
