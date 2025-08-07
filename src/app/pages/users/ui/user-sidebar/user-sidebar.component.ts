import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

import { CommonModule } from '@angular/common'
import { User } from '../../models/user.interface'

@Component({
  selector: 'app-user-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSidebarComponent {
  user = input.required<User>()
  close = output()
}
