import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ng-microfrontend-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public users: any = [];
  public filteredUsers: any = [];
  title = 'search';

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
      this.allUsers();
  }

  public searchUsers(event: any) {
    const name = event.target.value;
    console.log(event);
    
    if (name) {
      this.filteredUsers = this.users.filter((user: any) => user.name.firstname.includes(name));
      
      return;
    }

    this.filteredUsers = this.users;
  }

  public allUsers() {
    return this.http
      .get('https://fakestoreapi.com/users')
      .pipe(take(1))
      .subscribe({
        next: (users) => {
          console.log(users);
          this.users = users;
          this.filteredUsers = this.users;
        }
      });
  }
}
