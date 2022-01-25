import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ProductApiService } from '../services/product-api.service';
import { IProduct } from '@ng-microfrontend-mfe/shared'

@Component({
  selector: 'ng-microfrontend-mfe-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public productList: IProduct[] = [];

  constructor(private productApiService: ProductApiService) { }

  public ngOnInit(): void {
    this.getProductsFromApi();
  }

  public getProductsFromApi() {
    this.productApiService.getProductsFromApi()
      .pipe(take(1))
      .subscribe({
        next: (products: IProduct[]) => {
          this.productList = products;
        }
      });
  }

}
