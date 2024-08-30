import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutMeComponent } from "../about-me/about-me.component";
import * as AOS from 'aos';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, FontAwesomeModule, ProjectsComponent, AboutMeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
  constructor (private _renderer: Renderer2) {}

  faLinkedin = faLinkedin;
  faGithub = faGithub;

  ngOnInit(): void {
    this._renderer.setStyle(document.body, 'overflow-x', 'hidden');
    AOS.init({
      duration: 750, // duração em milissegundos
      easing: 'ease-in-out', // tipo de easing
      once: true // animação só ocorre uma vez
  });
    AOS.refresh();
  }
}
