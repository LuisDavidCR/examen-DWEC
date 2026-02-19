import { Component, inject } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { SerieDto } from '../../interfaces/serie.interface';

@Component({
  selector: 'app-home.component',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private serieService = inject(SeriesService);
  series: SerieDto[] = [];

  ngOnInit() {
    this.serieService.getAll().subscribe((data: SerieDto[]) => {
      this.series = data;
    });
  }
}
