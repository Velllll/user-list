import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { delay, map } from 'rxjs/operators'
import { User, UserFilter } from '../models/user.interface'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private mockUsers: User[] = [
    { id: 1, name: 'User 1', email: 'user1@email.com', active: true },
    { id: 2, name: 'User 2', email: 'user2@email.com', active: true },
    { id: 3, name: 'User 3', email: 'user3@email.com', active: true },
    { id: 4, name: 'User 4', email: 'user4@email.com', active: false },
    { id: 5, name: 'User 5', email: 'user5@email.com', active: true },
    { id: 6, name: 'User 6', email: 'user6@email.com', active: false },
  ]

  getUsers(filter?: UserFilter): Observable<User[]> {
    return of(this.mockUsers).pipe(
      map((users) => this.applyFilters(users, filter)),
      delay(200),
    )
  }

  private applyFilters(users: User[], filter?: UserFilter): User[] {
    if (!filter) return users

    return users.filter((user) => {
      const searchMatch = !filter.search || user.name.toLowerCase().includes(filter.search.toLowerCase())

      const activeMatch = filter.active == null || filter.active === undefined || user.active === filter.active

      return searchMatch && activeMatch
    })
  }
}
