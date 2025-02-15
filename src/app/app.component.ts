import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Subscription } from 'rxjs'; // Importa Subscription

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  backgroundImage: string = '';
  private routerSubscription: Subscription | undefined; // Para la suscripción

  constructor(private router: Router) {}

  ngOnInit() {  // Mejor usar ngOnInit
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setBackgroundImage(event.url);
      }
    });

    // Establece la imagen inicial al cargar el componente
    this.setBackgroundImage(this.router.url);
  }

  setBackgroundImage(url: string) {
    const backgrounds: { [key: string]: string } = {
      '/bio': 'url(../assets/images/background.png',
      '/calendar': 'url(assets/images/calendar.jpg)',
      '/video': 'url(assets/images/video.jpg)',
      '/blog': 'url(assets/images/blog.jpg)',
      '/folium': 'url(assets/images/folium.jpg)',
      '/': 'url(../assets/images/background.jpg',   
     };

   /*this.backgroundImage = backgrounds[url] || 'url(assets/images/background.jpg)';*/
  }

  ngOnDestroy() { // Importante: Desuscribirse
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}