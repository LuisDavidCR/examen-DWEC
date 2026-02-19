import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieDto } from '../interfaces/serie.interface';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private http = inject(HttpClient);

  private apiUrl = 'https://peticiones.online/api/series';

  getAll(): Observable<SerieDto[]> {
    return this.http.get<SerieDto[]>(this.apiUrl);
  }

  create(dto: any) {
    return this.http.post<any>(this.apiUrl, dto);
  }
}
