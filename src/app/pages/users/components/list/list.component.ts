import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { UserService } from '../../services/user.service'
import { CommonModule } from '@angular/common'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { BehaviorSubject, debounceTime, startWith, switchMap } from 'rxjs'
import { UserTableComponent } from '../../ui/user-table/user-table.component'
import { UserSidebarComponent } from '../../ui/user-sidebar/user-sidebar.component'
import { FormFilter, UserFilterComponent } from '../../ui/user-filter/user-filter.component'
import { User, UserFilter } from '../../models/user.interface'

@Component({
  selector: 'app-list',
  imports: [CommonModule, ReactiveFormsModule, UserTableComponent, UserSidebarComponent, UserFilterComponent],
  standalone: true,
  providers: [UserService],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  private readonly userService = inject(UserService)
  filter = new FormGroup<FormFilter>({
    search: new FormControl<null | string>(null),
    active: new FormControl<null | boolean>(null),
  })

  users$ = this.filter.valueChanges.pipe(
    startWith(this.filter.value),
    debounceTime(200),
    switchMap((filter) => {
      return this.userService.getUsers(filter)
    }),
  )

  selectedUser$ = new BehaviorSubject<null | User>(null)

  selectUser(user: User | null): void {
    this.selectedUser$.next(user)
  }

  setFilter(filter: UserFilter): void {}
}
