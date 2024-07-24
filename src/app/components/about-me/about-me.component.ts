import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faPenNib } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faPenNib = faPenNib;
  faEnvelopeOpenText = faEnvelopeOpenText;

  email: string = 'nicollasrocha320@gmail.com';
  message: string = this.email;
  isCopied: boolean = false;

  copyEmail() {
    const textarea = document.createElement('textarea');
    textarea.value = this.email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    this.showCopiedMessage('Email copiado!');
  }

  showCopiedMessage(newMessage: string) {
    this.message = newMessage;
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
      this.message = this.email;
    }, 800);
  }
}
