import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public activeLang = 'es';

constructor(private translate: TranslateService) {
  this.translate.setDefaultLang(this.activeLang);
}

public cambiarLenguaje(lang: string) {
  this.activeLang = lang;
  this.translate.use(lang);
}

closeNavbar(): void {
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    // Elimina la clase 'show' para cerrar el menú
    navbarCollapse.classList.remove('show');
  }
}
 
}