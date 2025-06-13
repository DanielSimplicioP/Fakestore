import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()), // Habilita input binding nas rotas
    provideIonicAngular({
      mode: 'md' // ou 'ios' para estilo específico
    }),
    provideHttpClient(), // Para chamadas HTTP
    importProvidersFrom([ /* Outros módulos se necessário */ ])
  ]
}).catch(err => console.error(err));