import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  selector: 'ng-microfrontend-mfe-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public productList: any = [];

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.getProductsFromApi();
  }

  public getProductsFromApi() {
    return this.http
      .get('https://fakestoreapi.com/products')
      .pipe(take(1))
      .subscribe({
        next: (products) => {
          console.log(products);
          this.productList = products;
        }
      });
  }

}
