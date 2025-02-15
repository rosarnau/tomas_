import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ // Animation definition here
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('1s ease-in'))
    ])
  ]
})
export class HomeComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    const backgroundImage = this.elementRef.nativeElement.querySelector('.home-background');

    if (backgroundImage) {
      backgroundImage.addEventListener('load', () => {
        const nombreContainer = this.elementRef.nativeElement.querySelector('.nombre-container');
        if (nombreContainer) {
          this.renderer.addClass(nombreContainer, 'visible');
        }
      });
    } else {
      console.error('No se encontró el elemento .home-background');
    }
  }
}