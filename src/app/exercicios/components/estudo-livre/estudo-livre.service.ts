/* eslint-disable @typescript-eslint/member-ordering */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConcluirEstudoLivreInput, HashInput, Response } from './interfaces';
import { take } from 'rxjs/operators';
import { PassoFinalizar } from 'src/app/common/interfaces/passo/PassoFinalizar';
import { Arvore } from 'src/app/common/interfaces/arvore/arvore.model';

@Injectable({
  providedIn: 'root',
})
export class EstudoLivreService {
  private header = (hash: HashInput) => ({
    headers: new HttpHeaders({
      jogadorhash: hash.usuHash,
      exerciciohash: hash.exeHash,
    }),
  });
  private readonly api = `${environment.api}aluno/estudo-livre/concluir`;
  constructor(private http: HttpClient) {}

  concluir(arvore: Arvore, passo: PassoFinalizar, hash: HashInput) {
    return this.http
      .post<Response>(`${this.api}`, { arvore, passo }, this.header(hash))
      .pipe(take(1));
  }
}
