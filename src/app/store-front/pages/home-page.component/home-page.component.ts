import { Component, effect, inject, output, signal } from '@angular/core';
import { AuthService } from '@auth/services/auth.services';
import { ProductCardComponent } from '@products/components/product-card.component/product-card.component';
import { ProductsResponse } from '@products/interfaces/product.interface';
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'home-page',
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {

  productsService = inject(ProductsService);

  productsResponse = signal<ProductsResponse>({
    count:0,
    pages:0,
    products:[]
  })

  authService = inject(AuthService);
  respuesta = output<ProductsResponse>;
  // output<tipoDato>();

  productsResource = effect(() => {
    this.productsService
      .getProducts({
        limit: 4,
        gender: 'women',
      })
      .subscribe((resp) => {
        this.productsResponse.set(resp);
      });
  });
}
