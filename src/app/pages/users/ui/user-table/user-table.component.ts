import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

import { CommonModule } from '@angular/common'
import { User } from '../../models/user.interface'

@Component({
  selector: 'app-user-table',
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss',
})
export class UserTableComponent {
  users = input.required<User[] | null>()
  selectUser = output<User>()
}
