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
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  conciertos: Evento[] = [];
  conciertosProximos: Evento[] = [];
  conciertosPasados: Evento[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.cargarconciertos();

    // 🔹 Suscribirse a cambios de idioma para actualizar la agenda dinámicamente
    this.translate.onLangChange.subscribe(() => {
      this.cargarconciertos();
    });
  }

  cargarconciertos(): void {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    this.translate.get('AGENDA').subscribe(agenda => {
      this.conciertos = Object.keys(agenda).map(key => ({
        id: key,
        fechaKey: `AGENDA.${key}.FECHA`,        
        conciertoKey: `AGENDA.${key}.CONCIERTO`,
        lugarKey: agenda[key].LUGAR || '',
        horaKey: agenda[key].HORA || '',
        ciudadKey: agenda[key].CIUDAD || '',
        enlace: agenda[key].ENLACE || '',
        fechaReal: new Date(agenda[key].FECHA_ISO)
      }));

      this.conciertosProximos = this.conciertos.filter(e => e.fechaReal >= hoy);
      this.conciertosPasados = this.conciertos.filter(e => e.fechaReal < hoy);

      console.log('Hoy es:', hoy.toISOString());
      console.log('Eventos futuros:', this.conciertosProximos);
      console.log('Eventos pasados:', this.conciertosPasados);
    });
  }
}

