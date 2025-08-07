import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

export interface FormFilter {
  search: FormControl<string | null>
  active: FormControl<boolean | null>
}

@Component({
  selector: 'app-user-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-filter.component.html',
  styleUrl: './user-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFilterComponent {
  filter = input.required<FormGroup<FormFilter>>()

  setActive(statue: boolean | null): void {
    this.filter().controls.active.patchValue(statue)
  }
}
