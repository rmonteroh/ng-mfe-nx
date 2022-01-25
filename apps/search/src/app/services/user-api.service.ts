import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '@ng-microfrontend-mfe/shared';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  public getUsersFromApi(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://fakestoreapi.com/users');
  }
}
