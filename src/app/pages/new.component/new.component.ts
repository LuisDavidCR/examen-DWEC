import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeriesService } from '../../services/series.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new.component',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  private fb = inject(FormBuilder);
  private seriesService = inject(SeriesService);
  private router = inject(Router);

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    channel: ['', [Validators.required]],
    rating: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
  });

  save() {
    if (this.form.valid) {
      this.seriesService.create(this.form.value).subscribe({
        next: (response) => {
          alert(`Serie creada con id: ${response.id}`);
          this.router.navigate(['/home']);
        },
      });
    }
  }
}
