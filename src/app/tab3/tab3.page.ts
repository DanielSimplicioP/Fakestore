import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { 
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, schoolOutline, calendarOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    DatePipe, // Adicionado para o pipe de data
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonIcon,
    IonLabel
  ]
})
export class Tab3Page {
  currentDate: Date = new Date();
  
  constructor() {
    addIcons({ mailOutline, schoolOutline, calendarOutline });
  }
}