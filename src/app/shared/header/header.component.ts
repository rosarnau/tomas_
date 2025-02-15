import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showMenu = false;
  showLanguageMenu = false;

  constructor(private translate: TranslateService) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleLanguageMenu() {
    this.showLanguageMenu = !this.showLanguageMenu;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.showLanguageMenu = false;
    this.showMenu = false;
  }
}
