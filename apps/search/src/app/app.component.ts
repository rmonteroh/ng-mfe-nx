import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IUser } from '@ng-microfrontend-mfe/shared';
import { UserApiService } from './services/user-api.service';

@Component({
  selector: 'ng-microfrontend-mfe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public users: IUser[] = [];
  public filteredUsers: IUser[] = [];

  constructor(private userApiService: UserApiService) {}

  public ngOnInit(): void {
    this.allUsers();
  }

  public searchUsers(search: string) {
    if (search) {
      this.filteredUsers = this.users.filter((user: IUser) =>
        user.name.firstname.includes(search)
      );

      return;
    }

    this.filteredUsers = this.users;
  }

  public allUsers() {
    this.userApiService
      .getUsersFromApi()
      .pipe(take(1))
      .subscribe({
        next: (users: IUser[]) => {
          this.users = users;
          this.filteredUsers = this.users;
        },
      });
  }
}
