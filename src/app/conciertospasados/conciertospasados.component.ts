import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Evento {
  id: string;
  fechaKey: string;
  conciertoKey: string;
  lugarKey?: string;
  horaKey?: string;
  ciudadKey?: string;
  enlace?: string;
  fechaReal: Date;
}

@Component({
  selector: 'app-conciertospasados',
  templateUrl: './conciertospasados.component.html',
  styleUrls: ['./conciertospasados.component.css']
})
export class ConciertosPasadosComponent implements OnInit {

  conciertosPasados: Evento[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.cargarConciertosPasados();
  }

  cargarConciertosPasados(): void {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const agenda = this.translate.instant('AGENDA');
    
    this.conciertosPasados = Object.keys(agenda)
  .map(key => ({
    id: key,
    fechaKey: `AGENDA.${key}.FECHA`,
    conciertoKey: `AGENDA.${key}.CONCIERTO`,
    lugarKey: agenda[key].LUGAR || '',  // ✅ Ahora almacena el valor real
    horaKey: agenda[key].HORA || '',
    ciudadKey: agenda[key].CIUDAD || '',
    enlace: agenda[key].ENLACE || undefined,
    fechaReal: new Date(agenda[key].FECHA_ISO)
  }))
  .filter(e => e.fechaReal < hoy);

    console.log('Hoy es:', hoy.toISOString());
    console.log('Eventos pasados:', this.conciertosPasados);
  }

}