import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Importa solo una vez
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BiografiaComponent } from './biografia/biografia.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslationComponent } from './translation/translation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json'); // Ruta correcta a tus archivos de traducción
}

@NgModule({
  declarations: [
    AppComponent,
    BiografiaComponent,
    CalendarComponent,
    HomeComponent,
    TranslationComponent,
    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    SharedModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory, // Usa la función factory que has definido
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }