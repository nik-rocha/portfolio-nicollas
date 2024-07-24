import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private _renderer: Renderer2) {}

  ngOnInit() {
    this._renderer.setStyle(document.body, 'overflow-x', 'hidden');
  }

  ngOnDestroy(): void {
    this._renderer.removeStyle(document.body, 'overflow-x');
  }
  
  title = 'nicollas-portfolio';
}
