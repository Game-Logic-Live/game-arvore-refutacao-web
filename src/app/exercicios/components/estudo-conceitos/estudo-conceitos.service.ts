/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HashInput, Response } from './interfaces';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EstudoConceitosService {
  private header = (hash: HashInput) => ({
    headers: new HttpHeaders({
      jogadorhash: hash.usuHash,
      exerciciohash: hash.exeHash,
    }),
  });
  private readonly api = `${environment.api}aluno/estudo-conceitos/concluir`;
  constructor(private http: HttpClient) {}

  concluir(hash: HashInput) {
    return this.http
      .post<Response>(`${this.api}`, null, this.header(hash))
      .pipe(take(1));
  }
}
