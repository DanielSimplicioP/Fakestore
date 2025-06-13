import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../../models/product.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab2Page implements OnInit {
  product: Product | null = null;
  isLoading = true;
  error: string | null = null;
  retryCount = 0;
  maxRetries = 3;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    const productId = this.route.snapshot.paramMap.get('id');
    
    if (!productId) {
      this.handleError('ID do produto não encontrado na URL');
      return;
    }

    const idNumber = Number(productId);
    
    if (isNaN(idNumber)) {
      this.handleError('ID do produto inválido');
      return;
    }

    this.isLoading = true;
    this.error = null;
    
    this.apiService.getProductById(idNumber)
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (product) => {
          this.product = product;
          this.retryCount = 0; // Reset retry count on success
        },
        error: (err) => {
          this.handleError('Erro ao carregar produto', err);
          this.retryWithBackoff();
        }
      });
  }

  private retryWithBackoff() {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      const delay = Math.min(1000 * Math.pow(2, this.retryCount), 10000); // Exponential backoff with max 10s
      setTimeout(() => this.loadProduct(), delay);
    }
  }

  private handleError(message: string, error?: any) {
    console.error(message, error);
    this.error = message;
    this.isLoading = false;
    this.product = null;
  }

  reload() {
    this.loadProduct();
  }
}